---
id: security
title: 🛡️ Security
sidebar_position: 12
---

# Security Tools

Check connection status, inspect permissions, and manage access.

---

## wp_status
**Level:** 🔵 READ

The first tool to call after connecting — confirms WP-MCP is working and returns site info.

```
Call wp_status to confirm WP-MCP is connected to my site
and show me the plugin version and available tool count.
```

---

## wp_list_tools
**Level:** 🔵 READ

List all available WP-MCP tools grouped by category.

```
Call wp_list_tools and show me a summary of all available tools
grouped by category.
```

---

## wp_inspect_database
**Level:** 🔵 READ

See [Health & Diagnostics →](/tools/health)

---

## Managing security from the dashboard

The **WP-MCP → Security** page in WordPress admin lets you:

- **View the security checklist** — HTTPS, rate limiting, confirmation requirement
- **Set permission profiles** per user and per AI client
- **Generate or revoke Cowork Bearer Tokens**
- **View the capability matrix** — which WordPress permissions each tool requires

---

## Permission levels explained

| Profile | What it allows |
|---|---|
| **Full access** | All tools including DANGER |
| **Write access** | READ + WRITE tools only |
| **Read only** | READ tools only — nothing changes |
| **Blocked** | No access at all |

Set different profiles per AI client (Claude vs Codex) and per WordPress user from the Security page.
