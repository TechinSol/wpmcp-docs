---
id: codex
title: Connect Codex
sidebar_position: 2
---

# Connect Codex to WordPress

WP-MCP connects to Codex via the **WP-MCP Companion plugin** for Codex. Once set up, Codex has full access to your WordPress site through all 130+ tools.

---

## Prerequisites

- WP-MCP installed and active on your WordPress site
- A Codex account with the WP-MCP Companion plugin installed

---

## Step 1 — Install the WP-MCP Companion in Codex

Install the **WP-MCP for Codex** connector plugin inside Codex. Visit [techinsol.io](https://techinsol.io) for the latest download link.

---

## Step 2 — Generate a connection password

On the **WP-MCP Dashboard** in WordPress:

1. Click **🔑 Generate for Codex**
2. Copy the password — **shown only once**

---

## Step 3 — Copy and paste the connection prompt

Click **📋 Copy complete prompt** on the dashboard. Open Codex and paste it:

```
Please configure WP-MCP for my WordPress site.

Site URL: https://yoursite.com
Username: yourusername
Application Password: xxxx xxxx xxxx xxxx xxxx xxxx

Call wp_status to verify the connection is working.
```

---

## Step 4 — Confirm it works

Codex will call `wp_status` and confirm:

> ✅ Connected to **Your Site Name**. WP-MCP v1.9.5. 130 tools available.

Try your first command:

```
List all my WooCommerce products with their prices and stock status.
```

---

## Troubleshooting

**Codex can't find WP-MCP tools**
Make sure the WP-MCP Companion plugin is installed and enabled in Codex settings.

**Authentication fails**
Verify the Application Password is correct and the username is your WordPress login name (not display name or email).
