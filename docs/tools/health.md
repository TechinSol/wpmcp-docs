---
id: health
title: 🏥 Health & Diagnostics
sidebar_position: 11
---

# Health & Diagnostics

Run comprehensive health checks, read error logs, inspect scheduled tasks, and more.

---

## wp_site_audit
**Level:** 🔵 READ

The most powerful diagnostic tool — runs a comprehensive check of your entire WordPress install.

```
Run a full health check on my WordPress site — check PHP version,
active plugin count, any outdated plugins, SSL status, debug mode,
and give me an overall score with recommendations.
```

The audit checks:
- PHP version
- WordPress version
- Active plugin count and any known conflicts
- SSL/HTTPS status
- Debug mode (should be off on live sites)
- File permissions
- Database size
- Memory limit

---

## wp_get_debug_log
**Level:** 🔵 READ

Read the WordPress debug log to find PHP errors and warnings.

```
Show me the last 50 lines of my WordPress debug.log file
so I can check for PHP errors.
```

---

## wp_list_rest_routes
**Level:** 🔵 READ

List all registered REST API endpoints grouped by namespace.

```
List all REST API routes on my WordPress site — group them by namespace.
```

---

## wp_list_cron_jobs
**Level:** 🔵 READ

Show all scheduled WordPress cron tasks.

```
Show me all scheduled cron jobs on my site —
include the next run time and frequency.
```

---

## wp_inspect_database
**Level:** 🔵 READ

Check database tables, sizes, and row counts.

```
Inspect my WordPress database — show all tables with row counts and sizes,
and flag any that look unusually large.
```

---

## wp_list_transients
**Level:** 🔵 READ

List all WordPress transients (temporary cached data).

```
List all WordPress transients currently in the database —
show name and expiry time.
```

---

## wp_flush_cache
**Level:** 🔴 DANGER

Clear all WordPress object cache and transients.

```
Flush all WordPress caches — I just made a major content update.
```

---

## Tips

- Run `wp_site_audit` after every major plugin update to catch regressions
- Enable WordPress debug mode temporarily when diagnosing issues, then disable it again
- Large numbers of transients (hundreds) can slow down your database — flush regularly
