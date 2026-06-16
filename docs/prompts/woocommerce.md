---
id: woocommerce
title: WooCommerce Prompts
sidebar_position: 5
---

# WooCommerce Prompts

Prompts for managing your WooCommerce store through Claude or Codex.

---

## Products

**List all products**
```
Show me all products in my store — name, price, stock status, and category.
```

**Add one product**
```
Create a new WooCommerce product:
- Name: "[product name]"
- Price: $[price]
- Stock: [quantity]
- Category: [category]
- Description: "[short description]"
```

**Add multiple products**
```
Add these products to my store:
1. [Name] — $[price] — [stock] in stock — [category]
2. [Name] — $[price] — [stock] in stock — [category]
3. [Name] — $[price] — [stock] in stock — [category]
```

**Update a price**
```
Update the price of "[product name]" to $[new price].
```

**Update stock**
```
Set the stock quantity of "[product name]" to [number].
```

**Find out-of-stock products**
```
Show me all products that are currently out of stock.
```

---

## Orders

**Recent orders**
```
Show me my last 10 orders — order number, customer name, total, and status.
```

**Orders by status**
```
Show me all [pending / processing / completed] orders from the last 7 days.
```

**Order details**
```
Show me the full details of order #[number] —
items, quantities, shipping address, and payment method.
```

---

## Customers

**Top customers**
```
Show me my top 10 customers by total spend.
Include their name, email, and number of orders.
```

**Find a customer**
```
Find the customer with email "[email]" and show me their order history.
```

---

## Store health

**Full store check**
```
Give me a summary of my WooCommerce store:
- Total products and how many are out of stock
- Orders in the last 30 days
- Total revenue last month
- Any products with no category
```
