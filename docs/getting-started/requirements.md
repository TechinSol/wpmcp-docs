---
id: requirements
title: Requirements
sidebar_position: 1
---

# Requirements

Before installing WP-MCP, make sure your setup meets these requirements.

---

## WordPress & PHP

| Requirement | Minimum version |
|---|---|
| WordPress | 6.3 or higher |
| PHP | 8.1 or higher |
| MySQL | 5.7 or higher |

To check your PHP version: go to **WordPress Admin → Tools → Site Health → Info → Server**.

---

## WordPress settings

**Application Passwords must be enabled.**
Application Passwords are built into WordPress 5.6+ and are enabled by default. They may be disabled on some managed hosts. If you don't see an "Application Passwords" section at the bottom of **Users → Your Profile**, contact your host.

**REST API must be accessible.**
WP-MCP uses the WordPress REST API. Some security plugins (Wordfence, iThemes Security) block REST API access by default — you may need to whitelist it.

---

## AI client requirements

| Client | What you need |
|---|---|
| **Claude** | A Claude.ai account (any plan) with Connectors access |
| **Codex** | Codex account with the WP-MCP Companion plugin installed |

---

## Hosting compatibility

WP-MCP works on all standard WordPress hosting. This includes:

- ✅ Hostinger
- ✅ SiteGround
- ✅ Bluehost
- ✅ WP Engine
- ✅ Kinsta
- ✅ Local (MAMP, LocalWP, XAMPP)
- ✅ VPS / dedicated servers

:::tip
If your site runs on HTTPS (recommended), WP-MCP works out of the box. HTTP sites work too but HTTPS is strongly recommended for security.
:::

---

## Next step

👉 [Install the plugin →](/getting-started/installation)
