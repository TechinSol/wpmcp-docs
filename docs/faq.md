---
id: faq
title: FAQ
sidebar_position: 8
---

# Frequently Asked Questions

---

## Is my site data safe?

Yes. WP-MCP only runs actions that you (or your AI assistant) explicitly request. Every action is authenticated, rate-limited, and logged. DANGER-level tools require you to confirm before anything is deleted or overwritten.

---

## Can Claude accidentally delete my content?

Only if you ask it to — and even then, it will ask you to confirm. DANGER tools require `confirm: true`, which means Claude will always pause and ask "Are you sure?" before proceeding with any destructive action.

---

## Do I need to know any code?

No. WP-MCP is designed for non-technical users. You interact with your site through plain English — no IDs, no file paths, no code required.

---

## Does it work with my page builder?

WP-MCP has built-in support for **Elementor** and **Gutenberg** blocks. Other page builders (Divi, Beaver Builder, etc.) store data in custom formats — WP-MCP can read and update posts but won't have builder-specific layout awareness.

---

## Does it work with WooCommerce?

Yes — WP-MCP has 14 WooCommerce-specific tools for products, orders, customers, and inventory. WooCommerce must be installed and active.

---

## Does it work with Yoast SEO / Rank Math?

Yes — WP-MCP automatically detects which SEO plugin you have and uses the right one. It supports both Yoast SEO and Rank Math.

---

## What happens if I deactivate WP-MCP?

All AI connections stop immediately. No data is deleted — your posts, settings, and audit logs remain intact. Reactivating the plugin restores full functionality.

---

## Can multiple people use WP-MCP at the same time?

Yes. Each WordPress user can have their own Application Password and permission profile. Claude or Codex authenticated as User A operates under User A's permissions.

---

## Does WP-MCP work on managed WordPress hosts?

Yes, on most managed hosts. Application Passwords must be enabled (they are by default on most hosts). If you're on a host that disables them, use the **Cowork Bearer Token** authentication method instead.

---

## Is there a limit on how many tools Claude can use?

Not from WP-MCP. The rate limit (default: 60 requests/minute) applies per user. You can increase this in **WP-MCP → Settings**.

---

## What data does WP-MCP send to external servers?

WP-MCP itself sends nothing to external servers. All tool execution happens on your WordPress server. The AI client (Claude or Codex) communicates with WP-MCP through your site's REST API using your credentials — your content never passes through TechinSol's servers.

---

## How do I update WP-MCP?

Download the latest version from [techinsol.io](https://techinsol.io) and upload it via **Plugins → Add New → Upload Plugin**. WordPress will update the existing installation without losing your settings.

---

## I have a question not answered here

Visit [techinsol.io](https://techinsol.io) or open an issue on [GitHub](https://github.com/techinsol).
