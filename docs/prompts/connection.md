---
id: connection
title: Connection Prompts
sidebar_position: 2
---

# Connection Prompts

Use these prompts to connect, verify, and reconnect WP-MCP.

---

## Connect Claude to your site

Paste this into Claude after adding the WP-MCP Cowork connector:

```
Please configure WP-MCP for my WordPress site.

Call wp_mcp_configure_connection with:
- Site URL: https://yoursite.com
- Username: your-username
- Application Password: [paste your password here]

Then call wp_status to confirm the connection is working.
```

:::tip
Generate the complete pre-filled version of this prompt (with your real URL, username, and password) from the **WP-MCP Dashboard** — one click generates and pre-fills everything.
:::

---

## Connect Codex to your site

```
Please configure WP-MCP for my WordPress site.

Site URL: https://yoursite.com
Username: your-username
Application Password: [paste your password here]

Call wp_status to verify the connection is working.
```

---

## Add the Claude connector (first time only)

If you haven't added the Cowork connector in Claude.ai yet:

```
Please help me add the WP-MCP connector in Claude.ai.

Steps:
1. Open Claude.ai → Settings → Connectors → Add custom connector
2. Enter this SSE endpoint: https://mcp.techinsol.io/sse
3. Complete the OAuth popup
4. Come back and call wp_mcp_configure_connection with:
   - Site URL: https://yoursite.com
   - Username: your-username
   - Application Password: [paste here]
5. Call wp_status to confirm.
```

---

## Verify the connection

Run this any time to confirm WP-MCP is working:

```
Call wp_status to confirm WP-MCP is connected to my WordPress site.
Show me the plugin version, site name, and how many tools are available.
```

---

## Reconnect after a password change

If you regenerated your Application Password:

```
My WordPress Application Password changed. Please update the WP-MCP connection:

- Site URL: https://yoursite.com
- Username: your-username
- New Application Password: [paste new password here]

Call wp_mcp_configure_connection to update it,
then call wp_status to confirm.
```

---

## Test all tools

After connecting, confirm everything is accessible:

```
Call wp_list_tools and show me a summary of all available WP-MCP tools
grouped by category, confirming the connection is fully operational.
```
