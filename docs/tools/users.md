---
id: users
title: 👥 Users
sidebar_position: 8
---

# User Tools

Manage all WordPress users — view profiles, create accounts, change roles, and delete users.

---

## wp_list_users
**Level:** 🔵 READ

List all users grouped by role.

```
List all users on my site, grouped by role.
I want to see who has admin access.
```

---

## wp_get_user
**Level:** 🔵 READ

Get the full profile of a specific user. Accepts username, email, or ID.

```
Show me the full profile for the user "jane.doe" —
their email, role, and registration date.
```

---

## wp_manage_users
**Level:** 🔴 DANGER

Create, update, change role, or delete a user.

**Create a user:**
```
Create a new editor user:
- Username: sara_editor
- Email: sara@mysite.com
- Role: editor
Send them a welcome email.
```

**Change a role:**
```
Change the role of "sara_editor" from editor to author.
```

**Delete a user:**
```
Delete the user "old_contractor" and reassign their posts to "admin".
```

:::warning
User management actions require `confirm: true`. Claude will ask you to confirm before making changes. You cannot delete or change the role of your own account through WP-MCP.
:::

---

## Tips

- Use username, email, or display name — no user IDs needed
- `dry_run: true` previews exactly what would change before applying
- Deleting a user does not delete their content — use `reassign_to` to move it to another user
