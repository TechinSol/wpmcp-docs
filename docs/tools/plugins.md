---
id: plugins
title: 🔌 Plugins
sidebar_position: 9
---

# Plugin Tools

List, activate, and deactivate WordPress plugins without touching the admin panel.

---

## wp_list_plugins
**Level:** 🔵 READ

Show all installed plugins with their active/inactive status.

```
Show me all plugins on my site — which ones are active and which are inactive.
```

---

## wp_activate_plugin
**Level:** 🟡 WRITE

Activate an installed plugin. Use the plugin name — no file path needed.

```
Activate the plugin "WooCommerce".
```

---

## wp_deactivate_plugin
**Level:** 🔴 DANGER

Deactivate an active plugin.

```
Deactivate the plugin "Hello Dolly" — I don't need it.
```

:::warning
Deactivating certain plugins (caching, security, SEO) can affect your site immediately. Claude will ask you to confirm.
:::

---

## Tips

- Plugin names work instead of file paths — `"WooCommerce"` instead of `"woocommerce/woocommerce.php"`
- Use `wp_list_plugins` first to confirm the exact name before activating/deactivating
- WP-MCP itself cannot be deactivated through WP-MCP (for obvious reasons)
