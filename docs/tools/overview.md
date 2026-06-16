---
id: overview
title: Tools Overview
sidebar_position: 1
---

# Tools Overview

WP-MCP gives Claude and Codex access to **130+ tools** across every part of WordPress. Every tool is plain-English friendly — no IDs required.

---

## Permission levels

Every tool has one of three levels:

| Level | Badge | What it means |
|---|---|---|
| **READ** | 🔵 READ | Only reads data — nothing on your site changes |
| **WRITE** | 🟡 WRITE | Creates or updates content |
| **DANGER** | 🔴 DANGER | Deletes or changes critical settings — always requires `confirm: true` |

---

## Smart parameter resolution

You never need to know a post ID, user ID, or plugin file path. WP-MCP resolves them automatically:

| Instead of… | Just say… |
|---|---|
| `post_id: 142` | `"About Us"` (the page title) |
| `user_id: 7` | `"jane"` or `"jane@mysite.com"` |
| `plugin_file: "woocommerce/woocommerce.php"` | `"WooCommerce"` |
| `term_id: 23` | `"News"` (the category name) |

---

## Tool categories

| Category | Tools | Description |
|---|---|---|
| [✨ Magic Tools](/tools/magic) | 8 | High-level tasks that chain multiple tools — "launch blog", "full SEO sweep" |
| [📝 Content](/tools/content) | 18 | Posts, pages, categories, tags, revisions |
| [🖼️ Media](/tools/media) | 6 | Media library, featured images |
| [🔍 SEO](/tools/seo) | 12 | Yoast, Rank Math, SEO audit |
| [🎨 Design](/tools/design) | 10 | Theme.json, colors, fonts, theme switching |
| [🛒 WooCommerce](/tools/woocommerce) | 14 | Products, orders, customers, inventory |
| [👥 Users](/tools/users) | 8 | List, create, update, delete, roles |
| [🔌 Plugins](/tools/plugins) | 6 | List, activate, deactivate |
| [💬 Comments](/tools/comments) | 6 | List, approve, trash, bulk spam delete |
| [🏥 Health & Diagnostics](/tools/health) | 18 | Site audit, debug log, cron, REST routes, database |
| [🛡️ Security](/tools/security) | 8 | Status, permissions, audit log |
| 🏗️ Builders | 8 | Elementor, Gutenberg blocks |
| 🗂️ Custom Fields | 4 | ACF get & set |
| ⚡ Cache | 4 | Flush cache, transients |

---

## Managing tools

You can enable or disable any tool from **WP-MCP → Tools** in the WordPress admin. The two core tools (`wp_status` and `wp_echo`) cannot be disabled.

---

## Next: browse by category

- [✨ Magic Tools →](/tools/magic)
- [📝 Content →](/tools/content)
- [🔍 SEO →](/tools/seo)
- [🛒 WooCommerce →](/tools/woocommerce)
