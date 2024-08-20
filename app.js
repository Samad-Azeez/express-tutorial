import express from 'express';// Import express
import { people } from './data.js'; // Import the people array from data.js

const app = express(); // Create an express app

app.use(express.static('./methods-public')); // Set the static folder
app.use(express.urlencoded({extended: false})) // Parse form data
app.use(express.json()) // Parse JSON data

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people }); // Send the people array as a response
});

app.post('/api/people', (req, res) => {
    const { name } = req.body; // Get the name from the form data
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' }); // Send an error message
    }
    res.status(201).json({ success: true, person: name }); // Send a success
});

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body; // Get the name from the form data  
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' }); // Send an error message 
    }
    res.status(201).json({ success: true, data: [...people, name] }); // Send a success message with the updated people array
});

app.post('/login', (req, res) => {
    const { name } = req.body; // Get the name from the form data
    if (name) {
        return res.status(200).send(`Welcome ${name}`); // Send a welcome message if the name is provided in the form data
    }
    res.status(401).send('Please provide credentials'); // Send an error message if the name is not provided in the form data   
});

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params; // Get the id from the request parameters
    const { name } = req.body; // Get the name from the form data
    const person = people.find((person) => person.id === Number(id)); // Find the person by id
    if (!person) {
        return res.status(404).json({ success: false, msg: `person with id ${id} not found` }); // Send an error message if the person is not found
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name; // Update the person name
        }
        return person;
    });
    res.status(200).json({ success: true, data: newPeople });
}); // Update a person by id from the people array in data.js

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});




// import morgan from "morgan";
// import { logger } from "./logger.js";
// import { products } from "./data.js";
// import { authorize } from "./authorize.js";

// const app = express();

// // app.use([authorize, logger]);

// app.use(morgan('tiny'))

// app.get('/', (req, res)=>{
//     res.send(`
//         <h1>Home page</h1>
//         <a href = ./api/products> products </a>
//         <a href = ./about> about </a>`);
// })

// app.get('/about', (req, res)=>{
//     res.send('Welcome to the about page')
// })

// app.get('/api/products', (req, res)=>{
//     const newProducts = products.map((products)=>{
//         const {id, name, image} = products;
//         return {id, name, image};
//     })
//     res.json(newProducts);
// })

// app.get('/api/products/:productID', (req, res) => {
//     const {productID} = req.params;
//     const singleProduct = products.find((product) => {
//         return product.id === Number(productID); // return the comparison result
//     });
//     if (!singleProduct) {
//         return res.status(404).send('product does not exist');
//     }
//     res.json(singleProduct); // Send the response after finding the product
// });

// app.get('/api/v1/query', (req, res)=>{
//     const {search, limit} = req.query;
//     let sortedProducts =[...products]

//     if (search) {
//         sortedProducts = sortedProducts.filter((product)=>{
//             return product.name.startsWith(search);
//         })
//     }

//     if (limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit));
//     }

//     if (sortedProducts.length < 1) {
//         // res.status(200).send('no products matched your search');
//         return res.status(200).json({success: true, data: []});
//     }

//     res.json(sortedProducts);
// })