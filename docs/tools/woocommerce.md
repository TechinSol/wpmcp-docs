---
id: woocommerce
title: 🛒 WooCommerce
sidebar_position: 7
---

# WooCommerce Tools

Manage your entire store — products, orders, customers, and inventory — through conversation.

:::info
These tools require WooCommerce to be installed and active.
:::

---

## wp_list_woo_products
**Level:** 🔵 READ

List all products with name, price, stock, and category.

```
Show me all products in my store — include name, price, stock status, and category.
```

```
Show me all products that are out of stock.
```

---

## wp_create_woo_product
**Level:** 🟡 WRITE

Create a new product with all details.

```
Create a new product:
- Name: "Premium Succulent Kit"
- Price: $34.99
- Stock: 75
- Category: Plants
- Description: "Everything you need to grow 5 succulents at home."
```

---

## wp_update_woo_product
**Level:** 🟡 WRITE

Update any field on an existing product.

```
Update the price of "Red Mug" to $14.99 and increase stock to 80.
```

```
Set "Blue Notebook" to out of stock.
```

---

## wp_delete_woo_product
**Level:** 🔴 DANGER

Delete a product from the store.

```
Delete the product "Discontinued Item 2022" from my store.
```

---

## wp_list_woo_orders
**Level:** 🔵 READ

List recent orders with customer name, total, and status.

```
Show me my last 10 orders — include order number, customer name, total, and status.
```

```
Show me all pending orders from the last 7 days.
```

---

## wp_get_woo_order
**Level:** 🔵 READ

Get full details of a specific order.

```
Show me the full details of order #1047 — items, shipping address, and payment method.
```

---

## wp_list_woo_customers
**Level:** 🔵 READ

List customers with purchase history.

```
Show me my top 10 customers by total spend.
```

---

## wp_magic_bulk_add_products *(Magic Tool)*
**Level:** 🟡 WRITE

Add multiple products in one prompt.

```
Add these products to my store:
1. Red T-Shirt — $29.99 — 50 in stock — category: Clothing
2. Blue Hoodie — $49.99 — 30 in stock — category: Clothing
3. White Cap — $19.99 — 100 in stock — category: Accessories
```

---

## Tips

- Product names work instead of IDs everywhere
- Use `dry_run: true` to preview bulk changes before applying
- Orders can be filtered by status: `pending`, `processing`, `completed`, `refunded`, `cancelled`
