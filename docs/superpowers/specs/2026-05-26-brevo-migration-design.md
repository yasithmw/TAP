# Brevo Migration Design
**Date:** 2026-05-26  
**Status:** Approved

## Overview

Replace Mailchimp with Brevo for waitlist email management. Contacts are segmented into two separate Brevo lists (Artists, Venues) so they can be filtered independently in the dashboard. A welcome email is sent automatically via Brevo Automation when a contact is added to either list.

---

## 1. Code Changes

### `src/app/api/subscribe/route.ts`
- Remove all Mailchimp logic (MD5 hash, Basic auth, two-step upsert + tag)
- Call Brevo Contacts API: `POST https://api.brevo.com/v3/contacts`
- Pass `api-key` header (Brevo uses key-based auth, no Base64 encoding needed)
- Body: `{ email, attributes: { FIRSTNAME: name }, listIds: [listId], updateEnabled: true }`
  - `updateEnabled: true` = upsert behaviour (safe to resubmit same email)
  - `listIds` = `[BREVO_ARTISTS_LIST_ID]` or `[BREVO_VENUES_LIST_ID]` based on `role`
- Return `{ success: true }` on 201/204, error on failure
- No frontend changes required — form already sends `name`, `email`, `role`

### `.env.local`
Remove:
```
MAILCHIMP_API_KEY
MAILCHIMP_AUDIENCE_ID
MAILCHIMP_SERVER_PREFIX
```

Add:
```
BREVO_API_KEY=your_api_key_here
BREVO_ARTISTS_LIST_ID=        ← numeric list ID from Brevo dashboard
BREVO_VENUES_LIST_ID=         ← numeric list ID from Brevo dashboard
```

---

## 2. Brevo Dashboard Setup (one-time, manual)

### Step 1 — Get your API key
1. Log in to [app.brevo.com](https://app.brevo.com)
2. Click your name (top right) → **Profile & Plans** → **SMTP & API** tab
3. Under **API Keys**, click **Generate a new API key** → name it "TAP Landing" → copy the key
4. Paste into `.env.local` as `BREVO_API_KEY`

### Step 2 — Create two contact lists
1. Go to **Contacts** → **Lists** → **Create a list**
2. Create list named **"Artists"** → save → note the numeric ID shown in the URL (e.g. `/lists/12`) or in the list details panel
3. Create list named **"Venues"** → save → note its numeric ID
4. Paste both IDs into `.env.local`

### Step 3 — Create the welcome email template
1. Go to **Campaigns** → **Templates** → **Create a template**
2. Name it **"TAP Welcome Email"**
3. Choose **Paste your own HTML** (not drag-and-drop)
4. Paste the full contents of `welcome-email.html` from the project root
5. Set Subject: `Welcome to TAP — you're on the list`
6. Set From name: `The Artist Platform` / From email: `support@theartistplatform.com.au`
7. **Save & activate** the template — note the **Template ID** (shown in the URL or templates list)

### Step 4 — Create automation: Artists welcome email
1. Go to **Automations** → **Create a workflow** → **Contact activity**
2. Choose trigger: **"Contact is added to a list"** → select **Artists**
3. Add action: **"Send an email"** → select the **TAP Welcome Email** template
4. Set delay: **Immediately (0 minutes)**
5. Name the workflow: **"Welcome — Artists"** → **Save & activate**

### Step 5 — Create automation: Venues welcome email
1. Repeat Step 4 but:
   - Trigger list: **Venues**
   - Workflow name: **"Welcome — Venues"**
2. Save & activate

> **Note:** Both automations use the same email template. If you later want a different message for venues, create a second template (e.g. "TAP Welcome Email — Venues") and point the Venues automation to it.

---

## 3. Architecture Summary

```
User submits form
       ↓
POST /api/subscribe  (name, email, role)
       ↓
Brevo Contacts API — upsert contact, assign to Artists or Venues list
       ↓
Brevo Automation triggers on list assignment
       ↓
Welcome email sent immediately
```

---

## 4. Error Handling

- If Brevo API returns non-2xx, the route logs the error body and returns `{ error: "Failed to subscribe" }` with status 500
- Frontend already handles this — shows "Something went wrong — please try again."
- No retry logic needed at this stage

---

## 5. Out of Scope

- Different welcome email content per role (can be done later by duplicating the template)
- Drip sequences / follow-up emails
- Unsubscribe handling beyond what Brevo manages automatically
