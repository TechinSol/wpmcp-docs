---
id: security
title: Security & Permissions
sidebar_position: 7
---

# Security & Permissions

WP-MCP is built security-first. Every AI request goes through a multi-step pipeline before anything happens on your site.

---

## The security pipeline

Every single tool call goes through these checks in order:

1. **Plugin enabled check** — is WP-MCP turned on?
2. **Authentication** — valid Application Password or Bearer Token?
3. **Rate limiting** — under the per-minute request limit?
4. **Tool enabled** — not disabled by the admin?
5. **Permission profile** — does this user/client have access to this tool level?
6. **WordPress capability** — does the user have the required WordPress permission?
7. **DANGER confirmation** — if the tool is DANGER level, was `confirm: true` provided?
8. **Parameter validation** — are all required fields present and valid?
9. **Execute** — run the tool
10. **Audit log** — record the action

---

## Authentication methods

### Application Passwords (recommended)
Standard WordPress authentication. Create one password per AI client so you can revoke access individually without affecting other connections.

**Generate from the WP-MCP Dashboard** — one click, no profile page needed.

### Cowork Bearer Token
An alternative token-based authentication for AI clients that can't use Application Passwords. Generate from **WP-MCP → Security**.

---

## Permission profiles

Assign a different access level per user and per AI client:

| Profile | READ tools | WRITE tools | DANGER tools |
|---|---|---|---|
| Full access | ✅ | ✅ | ✅ |
| Write access | ✅ | ✅ | ❌ |
| Read only | ✅ | ❌ | ❌ |
| Blocked | ❌ | ❌ | ❌ |

Configure from **WP-MCP → Security → Permission Profiles**.

---

## DANGER tool confirmation

Tools marked 🔴 DANGER (delete, bulk changes, critical settings) require `confirm: true` in the request. This is enforced at the plugin level — Claude or Codex will always ask you to confirm before proceeding.

You can disable this in **WP-MCP → Settings**, but it's strongly not recommended.

---

## Rate limiting

Default: **60 requests per minute** per user. Adjust from **WP-MCP → Settings**.

---

## Audit logging

Every action is logged — tool name, user, timestamp, parameters, and result. View the full log at **WP-MCP → Audit Log**.

---

## Best practices

- Create **one Application Password per AI client** — name them "WP-MCP Claude", "WP-MCP Codex"
- Assign **Write access** (not Full access) to clients that don't need to delete anything
- **Keep DANGER confirmation enabled** — the extra step takes 2 seconds and prevents accidents
- Review the **Audit Log** periodically to see what your AI assistant has been doing
- Revoke Application Passwords immediately if you suspect unauthorized access
