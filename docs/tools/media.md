---
id: media
title: 🖼️ Media
sidebar_position: 4
---

# Media Tools

Manage your WordPress media library and featured images.

---

## wp_list_media
**Level:** 🔵 READ

List images and files in your media library.

```
List all images in my media library — show filename, upload date, and file size.
```

```
Show me all images that are not attached to any post or page.
```

---

## wp_get_media
**Level:** 🔵 READ

Get details about a specific media item.

```
Show me the details of the image "hero-banner.jpg" —
its URL, dimensions, and alt text.
```

---

## wp_set_featured_image
**Level:** 🟡 WRITE

Set the featured image for any post or page. Accepts image filename or title.

```
Set the featured image for my post "Top 10 Hiking Trails"
to the image "hiking-banner.jpg" from my media library.
```

---

## wp_update_media
**Level:** 🟡 WRITE

Update the alt text, caption, or title of a media item.

```
Update the alt text for "hero-banner.jpg" to
"Bright Blooms Florist — fresh flower arrangements in Austin".
```

---

## Tips

- Always add descriptive alt text to images — it improves SEO and accessibility
- Use `wp_list_media` with `parent=0` to find orphaned images you can clean up
- Featured images accept the image filename or title — no media IDs needed
