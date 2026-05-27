export async function POST(request: Request) {
  const { name, email, role } = await request.json();

  if (!name?.trim() || !email?.trim() || !role) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY!;
  const artistsListId = Number(process.env.BREVO_ARTISTS_LIST_ID);
  const venuesListId = Number(process.env.BREVO_VENUES_LIST_ID);
  const listId = role === "venue" ? venuesListId : artistsListId;

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      email: email.trim().toLowerCase(),
      attributes: { FIRSTNAME: name.trim() },
      listIds: [listId],
      updateEnabled: true,
    }),
  });

  if (!res.ok && res.status !== 204) {
    const err = await res.json().catch(() => ({}));
    console.error("Brevo error:", err);
    return Response.json({ error: "Failed to subscribe" }, { status: 500 });
  }

  return Response.json({ success: true });
}
