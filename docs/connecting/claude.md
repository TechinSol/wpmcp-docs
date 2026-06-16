---
id: claude
title: Connect Claude
sidebar_position: 1
---

# Connect Claude to WordPress

WP-MCP connects to Claude via the **Cowork SSE connector** on claude.ai. Once connected, Claude gains access to all 130+ WP-MCP tools.

---

## Prerequisites

- WP-MCP installed and active on your WordPress site
- A Claude.ai account with Connectors access

---

## Step 1 — Add the WP-MCP connector in Claude.ai

1. Open [claude.ai](https://claude.ai)
2. Go to **Settings → Connectors**
3. Click **Add custom connector**
4. Enter this SSE endpoint URL:

```
https://mcp.techinsol.io/sse
```

5. Complete the OAuth popup if shown
6. The connector appears as **WP-MCP** in your connectors list

---

## Step 2 — Generate a connection password

On the **WP-MCP Dashboard** in WordPress:

1. Click **🔑 Generate for Claude**
2. Copy the password that appears — **you won't see it again**

---

## Step 3 — Copy and paste the connection prompt

The dashboard shows a complete prompt pre-filled with your details. Click **📋 Copy complete prompt**, open Claude, and paste it.

The prompt looks like this:

```
Please configure WP-MCP for my WordPress site.

Call wp_mcp_configure_connection with:
- Site URL: https://yoursite.com
- Username: yourusername
- Application Password: xxxx xxxx xxxx xxxx xxxx xxxx

Then call wp_status to confirm the connection is working.
```

---

## Step 4 — Confirm it works

Claude will respond with something like:

> ✅ WP-MCP connected to **Your Site Name**. Plugin version 1.9.5. 130 tools available.

You're ready to go. Try asking Claude to list your recent posts:

```
Show me my 10 most recent blog posts with their status and publish date.
```

---

## Reconnecting after a password change

If you ever regenerate your Application Password, copy the reconnect prompt from the **Prompts → Connection** page or the WP-MCP dashboard and paste it into Claude.

---

## Troubleshooting

**Claude says "I don't have access to WP-MCP tools"**
The Cowork connector may not be active in this conversation. Start a new chat and confirm the WP-MCP connector is enabled.

**`wp_mcp_configure_connection` returns an authentication error**
Double-check the Application Password — it must be copied exactly as shown (with spaces). Also confirm the username is your WordPress login name, not your display name or email.

**REST API blocked**
Some security plugins block REST API access. Whitelist `/wp-json/wp-mcp/*` in your security plugin settings.
