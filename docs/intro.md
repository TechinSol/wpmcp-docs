---
id: intro
title: Introduction
sidebar_position: 1
slug: /
---

# Welcome to WP-MCP

**WP-MCP** is a WordPress plugin built by [TechinSol](https://techinsol.io) that connects AI assistants like **Claude** and **Codex** directly to your WordPress site.

Once connected, you can manage your entire website through plain English — no coding, no page builders, no digging through settings.

---

## What can WP-MCP do?

| Ask Claude or Codex to… | What happens |
|---|---|
| "Write a blog post about summer gardening and publish it" | Creates and publishes the post |
| "Audit all my pages for missing SEO titles" | Returns a prioritized list of every page that needs attention |
| "Change my site's primary color to navy blue" | Updates theme.json and saves |
| "Add 5 products to my WooCommerce store" | Creates all 5 products with prices and descriptions |
| "Show me all users with admin access" | Lists every admin user on the site |
| "Run a full health check on my site" | Returns a report on PHP, plugins, SSL, errors, and more |

---

## How it works

WP-MCP implements the **Model Context Protocol (MCP)** — an open standard that lets AI assistants call tools on external systems. When Claude or Codex connects to your site through WP-MCP, it gains access to 130+ tools that cover every part of WordPress.

Every action goes through a security pipeline:
- ✅ Authentication (Application Password or Bearer Token)
- ✅ Rate limiting
- ✅ Permission profiles per user and per client
- ✅ Danger confirmation for destructive actions
- ✅ Full audit logging

---

## Works with

| Client | Connection method | Status |
|---|---|---|
| **Claude** (claude.ai) | Cowork SSE connector | ✅ Live |
| **Codex** | Companion plugin | ✅ Live |

---

## Ready to start?

👉 [Check the requirements →](/getting-started/requirements)
