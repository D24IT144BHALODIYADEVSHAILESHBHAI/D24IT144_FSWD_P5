const express = require('express');
const app = express();
const PORT = 3000;

// Sample product data
const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 999.99 },
    { id: 2, name: "Smartphone", category: "electronics", price: 499.99 },
    { id: 3, name: "T-Shirt", category: "clothing", price: 19.99 },
    { id: 4, name: "Jeans", category: "clothing", price: 39.99 },
    { id: 5, name: "Headphones", category: "electronics", price: 79.99 }
];

// GET /products - Return all products
app.get('/products', (req, res) => {
    const category = req.query.category;
    if (category) {
        const filteredProducts = products.filter(p => p.category === category);
        return res.json(filteredProducts);
    }
    res.json(products);
});

// GET /products/:id - Fetch a specific product by ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
