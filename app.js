import express from 'express';
import path from 'path';
import { products } from "./data.js";
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.get('/', (req, res)=>{
    res.send(`
        <h1>Home page</h1>
        <a href=./api/products>products</a>`);
})

app.get('/api/products', (req, res)=>{
    const newProducts = products.map((products)=>{
        const {id, name, image} = products;
        return {id, name, image};
    })
    res.json(newProducts);
})

app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params;
    const singleProduct = products.find((product) => {
        return product.id === Number(productID); // return the comparison result
    });
    if (!singleProduct) {
        return res.status(404).send('product does not exist');
    }
    res.json(singleProduct); // Send the response after finding the product
});

app.get('/api/v1/query', (req, res)=>{
    const {search, limit} = req.query;
    let sortedProducts =[...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        return res.status(200).json({success: true, data: []});
    }

    res.json(sortedProducts);
})

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});