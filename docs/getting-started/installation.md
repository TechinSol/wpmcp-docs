---
id: installation
title: Installation
sidebar_position: 2
---

# Installation

Installing WP-MCP takes less than a minute.

---

## Step 1 — Download the plugin

Download the latest WP-MCP `.zip` file from [techinsol.io](https://techinsol.io).

---

## Step 2 — Upload to WordPress

1. Log into your **WordPress Admin**
2. Go to **Plugins → Add New Plugin**
3. Click **Upload Plugin** (top of the page)
4. Choose the `.zip` file you downloaded
5. Click **Install Now**
6. Click **Activate Plugin**

---

## Step 3 — Open the WP-MCP dashboard

After activation, you'll see **WP-MCP** in your WordPress admin sidebar (near the top, below the Dashboard).

Click it — you'll land on the WP-MCP Dashboard.

---

## Step 4 — Verify the plugin is active

On the WP-MCP Dashboard, check the top-left stat card — it should show the number of available tools (around 130).

You can also test the REST API endpoint directly:

```
https://yoursite.com/wp-json/wp-mcp/v1/status
```

You should see a JSON response with `"status": "ok"`.

---

## Troubleshooting installation

**"The plugin does not have a valid header"**
The zip file may be corrupted or you uploaded the wrong file. Re-download from techinsol.io and try again.

**Plugin activates but WP-MCP doesn't appear in the sidebar**
Try refreshing the page. If it still doesn't appear, go to **Plugins → Installed Plugins** and confirm WP-MCP shows as Active.

**REST API returns a 404**
Go to **Settings → Permalinks** and click **Save Changes** — this refreshes WordPress routes.

---

## Next step

👉 [Connect Claude or Codex →](/getting-started/first-connection)
