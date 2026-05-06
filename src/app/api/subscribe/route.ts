import { createHash } from "crypto";

export async function POST(request: Request) {
  const { name, email, role } = await request.json();

  if (!name?.trim() || !email?.trim() || !role) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY!;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID!;
  const server = process.env.MAILCHIMP_SERVER_PREFIX!;
  const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");
  const normalizedEmail = email.trim().toLowerCase();
  const subscriberHash = createHash("md5").update(normalizedEmail).digest("hex");

  // Upsert subscriber (creates if new, updates if already exists)
  const memberRes = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        email_address: normalizedEmail,
        status_if_new: "subscribed",
        merge_fields: { FNAME: name.trim() },
      }),
    }
  );

  if (!memberRes.ok) {
    const err = await memberRes.json();
    console.error("Mailchimp member error:", err);
    return Response.json({ error: "Failed to subscribe" }, { status: 500 });
  }

  // Apply Artist or Venue tag
  const tagName = role === "venue" ? "Venue" : "Artist";

  const tagRes = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}/tags`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        tags: [{ name: tagName, status: "active" }],
      }),
    }
  );

  if (!tagRes.ok) {
    console.error("Mailchimp tag error:", await tagRes.json());
  }

  return Response.json({ success: true });
}
