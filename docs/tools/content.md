---
id: content
title: 📝 Content & Pages
sidebar_position: 3
---

# Content & Pages

Manage every post, page, category, and tag on your WordPress site.

---

## wp_list_posts
**Level:** 🔵 READ

List posts or pages with filters for status, author, category, and date.

```
List my 20 most recent blog posts — show title, status, publish date, and author.
```

```
Show all draft pages on my site.
```

---

## wp_get_post
**Level:** 🔵 READ

Get the full content and metadata of any post or page. Accepts the title instead of an ID.

```
Show me the full content of my "About Us" page.
```

---

## wp_create_post
**Level:** 🟡 WRITE

Create a new post or page with full content, categories, tags, and featured image.

```
Create a blog post titled "How to Choose the Right Houseplant"
with at least 600 words, category "Plants", and save as draft.
```

```
Create a published "Contact" page with our address:
123 Main St, Austin TX — phone 555-0100 — email hello@mysite.com
```

---

## wp_update_post
**Level:** 🟡 WRITE

Update any field on an existing post or page — content, title, status, categories.

```
Publish my draft post "How to Choose the Right Houseplant".
```

```
Update the title of "Old Blog Post" to "Updated: Our 2025 Guide".
```

---

## wp_delete_post
**Level:** 🔴 DANGER

Move a post or page to the trash.

```
Move the post "Old Promo — Spring 2022" to the trash.
```

:::warning
This requires `confirm: true`. Claude will ask you to confirm before proceeding.
:::

---

## wp_list_categories / wp_list_tags
**Level:** 🔵 READ

List all categories or tags with post counts.

```
Show me all my blog categories and how many posts each one has.
```

---

## wp_create_category / wp_create_tag
**Level:** 🟡 WRITE

Create a new category or tag.

```
Create a new category called "Tutorials" with the slug "tutorials"
and parent category "Blog".
```

---

## wp_search_posts
**Level:** 🔵 READ

Search posts and pages by keyword.

```
Find all posts that mention "summer sale" in the title or content.
```

---

## Tips

- You can always use **post titles** instead of IDs — e.g. `"About Us"` instead of `post_id: 42`
- Use `dry_run: true` on write operations to preview changes before applying them
- `wp_update_post` can change status, title, content, categories, tags, and excerpt in one call
