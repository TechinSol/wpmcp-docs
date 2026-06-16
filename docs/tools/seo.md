---
id: seo
title: 🔍 SEO
sidebar_position: 5
---

# SEO Tools

WP-MCP supports both **Yoast SEO** and **Rank Math**. If neither is installed, it falls back to native WordPress meta fields.

---

## wp_get_yoast_meta / wp_set_yoast_meta
**Level:** READ / 🟡 WRITE · Requires Yoast SEO

Get or set the Yoast SEO title, meta description, and focus keyphrase for any post or page.

```
Set the Yoast SEO meta for my "About Us" page:
- Title: "About Bright Blooms Florist — Fresh Flowers in Austin"
- Description: "We deliver fresh handpicked flowers across Austin. Order online for same-day delivery."
- Focus keyphrase: "florist Austin"
```

---

## wp_get_rankmath_meta / wp_set_rankmath_meta
**Level:** READ / 🟡 WRITE · Requires Rank Math

Get or set Rank Math SEO fields for any post or page.

```
Set the Rank Math meta for my "Services" page:
- SEO title: "Our Web Design Services — Bright Agency"
- Focus keyword: "web design services Austin"
- Meta description: "Professional web design starting at $2,500."
```

---

## wp_seo_audit_post
**Level:** 🔵 READ

Run a detailed SEO audit on a single post or page and get actionable recommendations.

```
Run an SEO audit on my post "10 Tips for Growing Tomatoes"
and tell me exactly what to improve.
```

The audit checks:
- Title length and keyword placement
- Meta description presence and length
- Content length
- Image alt text
- Internal links
- Readability score

---

## wp_magic_seo_sweep *(Magic Tool)*
**Level:** 🔵 READ + 🟡 WRITE

Audit your entire site and get a prioritized list of every SEO issue across all posts and pages.

```
Run a full SEO audit on my WordPress site — check every post and page
for missing titles, meta descriptions, thin content, and images without alt text.
Give me a prioritized fix list.
```

---

## Tips

- You can run the sweep with `fix: true` to automatically fill in missing meta titles and descriptions
- Use post titles instead of IDs: `"About Us"` instead of `post_id: 12`
- WP-MCP detects which SEO plugin you have installed and uses the right one automatically
