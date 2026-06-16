---
id: comments
title: 💬 Comments
sidebar_position: 10
---

# Comment Tools

Manage blog comments — approve, trash, and clean up spam.

---

## wp_list_comments
**Level:** 🔵 READ

List comments filtered by status.

```
Show me all comments pending approval on my blog.
```

```
How many spam comments do I have right now?
```

---

## wp_manage_comments
**Level:** 🟡 WRITE / 🔴 DANGER

Approve, trash, spam-mark, or bulk-delete comments.

**Approve a comment:**
```
Approve the pending comment from "Bob Smith"
on my post "Top 10 Hiking Trails".
```

**Trash all spam:**
```
Delete all spam comments on my site.
```

:::warning
Bulk deleting comments is irreversible. Claude will ask you to confirm.
:::

---

## Tips

- Check pending comments regularly — unanswered comments hurt engagement
- Run `wp_list_comments` with `status=spam` before bulk-deleting to see what you're removing
