---
id: first-connection
title: Your First Connection
sidebar_position: 3
---

# Your First Connection

This is the fastest way to connect — everything happens inside the WP-MCP dashboard. No digging through WordPress settings.

---

## The 3-step flow

### Step 1 — Generate a connection password

On the **WP-MCP Dashboard**, find the **"Connect in 3 steps"** card on the right side.

Click either:
- **🔑 Generate for Claude** — creates a password named "WP-MCP Claude"
- **🔑 Generate for Codex** — creates a password named "WP-MCP Codex"

The password appears immediately in a highlighted box.

:::warning Copy it now
WordPress Application Passwords are shown **only once**. Copy it before closing or refreshing the page.
:::

---

### Step 2 — Copy the complete prompt

The moment the password is generated, a **complete connection prompt** appears below it — pre-filled with:
- Your site URL
- Your WordPress username
- The password you just generated

Click **📋 Copy complete prompt**.

---

### Step 3 — Paste into Claude or Codex and test

Open Claude or Codex and paste the prompt. It will look like this:

```
Please configure WP-MCP for my WordPress site.

Call wp_mcp_configure_connection with:
- Site URL: https://yoursite.com
- Username: yourusername
- Application Password: xxxx xxxx xxxx xxxx xxxx xxxx

Then call wp_status to confirm the connection is working.
```

Claude or Codex will call `wp_mcp_configure_connection`, then `wp_status`, and confirm the connection.

---

### Verify from the dashboard

Back on the WP-MCP Dashboard, click **🔍 Test connection now** — you'll see a green ✅ with your site name if everything is working.

The **AI Client Connections** panel on the left will also update to show the client as "Connected".

---

## What's next?

Now that you're connected, try a prompt from the [Prompt Library](/prompts/library) — or head straight to the tool you need:

- [Write content →](/tools/content)
- [Fix SEO →](/tools/seo)
- [Manage your store →](/tools/woocommerce)
- [Run a site health check →](/tools/health)
