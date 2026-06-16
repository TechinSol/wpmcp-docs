---
id: design
title: 🎨 Design
sidebar_position: 6
---

# Design Tools

Change your site's colors, fonts, layout, and theme using plain English — no page builder required.

---

## wp_get_theme_json / wp_set_theme_json
**Level:** READ / 🟡 WRITE

Read or update your theme's `theme.json` — the file that controls global colors, fonts, spacing, and layout.

```
Update my theme colors:
- Primary: #2563eb (blue)
- Secondary: #7c3aed (purple)
- Background: #f8fafc
- Text: #1e293b
```

```
Show me my current theme.json — I want to see all the color and font settings.
```

---

## wp_magic_color_palette *(Magic Tool)*
**Level:** 🟡 WRITE

Generate a harmonious color palette from a single seed color and apply it automatically.

```
Generate a professional color palette for a wellness brand
starting from the color #0d9488. Apply it to my theme.
```

---

## wp_update_site_settings
**Level:** 🟡 WRITE

Update the site name, tagline, admin email, and other general settings.

```
Update my site name to "The Plant Corner"
and tagline to "Your guide to happy houseplants".
```

---

## wp_switch_theme
**Level:** 🔴 DANGER

Activate a different installed theme.

```
Switch my active theme to "Twenty Twenty-Four".
```

:::warning
Switching themes affects your entire site's appearance immediately. Claude will ask you to confirm.
:::

---

## wp_list_themes
**Level:** 🔵 READ

List all installed themes and which one is active.

```
Show me all installed WordPress themes and which one is currently active.
```

---

## wp_get_elementor_layout / wp_write_elementor_layout
**Level:** READ / 🟡 WRITE

Read or update the Elementor layout data for any page. Requires Elementor.

```
Show me the Elementor layout structure for my "Home" page.
```

---

## wp_get_blocks / wp_write_blocks
**Level:** READ / 🟡 WRITE

Read or update the Gutenberg block content for any post or page.

```
Update the heading block on my "About" page to say
"We've been growing flowers since 1998."
```

---

## Tips

- Theme.json changes apply globally — test on a staging site first if possible
- Use `dry_run: true` to preview what would change before applying
- Color palette generation uses color theory to create harmonious combinations
