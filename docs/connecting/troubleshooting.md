---
id: troubleshooting
title: Troubleshooting
sidebar_position: 3
---

# Troubleshooting Connection Issues

---

## Quick checklist

Before digging deeper, run through this list:

- ✅ WP-MCP plugin is **Active** in WordPress → Plugins
- ✅ WordPress is version **6.3 or higher**
- ✅ PHP is version **8.1 or higher**
- ✅ Application Passwords are **enabled** on your host
- ✅ The REST API is **accessible** (test: `https://yoursite.com/wp-json/wp-mcp/v1/status`)
- ✅ The username is your **WordPress login name** (not email, not display name)
- ✅ The password was copied **exactly** as shown (with spaces between chunks)

---

## Common errors

### "Method not found" or "Tool not available"

The connector is not active in the current Claude conversation. Start a new chat and ensure the WP-MCP connector is enabled.

### "Authentication failed" or 401 error

- Wrong username — use your WordPress **login name**, found at Users → Your Profile → Username
- Wrong password — Application Passwords must be copied exactly as shown: `xxxx xxxx xxxx xxxx xxxx xxxx`
- The password was already used to test and then deleted — generate a new one from the dashboard

### REST API returns 404

Permalinks need refreshing. Go to **Settings → Permalinks → Save Changes**.

### REST API blocked (403)

A security plugin is blocking the WP-MCP endpoint. In your security plugin, whitelist:
```
/wp-json/wp-mcp/*
```

Common plugins that cause this: Wordfence, iThemes Security, All In One WP Security.

### "WP-MCP is currently disabled"

The plugin has been turned off. Go to **WP-MCP → Settings** and enable it.

### Rate limit error

Too many requests in a short period. The default limit is 60 requests per minute. Go to **WP-MCP → Settings** to increase it if needed.

---

## Run the built-in diagnostics

The WP-MCP Dashboard has a built-in **Connection diagnostics** panel (click to expand). It checks:

- REST API accessibility
- Application Passwords availability
- Plugin status
- PHP version
- SSL status

It shows a green/red status for each check and tells you exactly what to fix.

---

## Still stuck?

Visit [techinsol.io](https://techinsol.io) for support or open an issue on [GitHub](https://github.com/techinsol).
