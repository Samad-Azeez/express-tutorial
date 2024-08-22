import express from 'express';
export const login = express.Router();

login.post('/', (req, res) => {
    const { name } = req.body; // Get the name from the form data
    if (name) {
        return res.status(200).send(`Welcome ${name}`); // Send a welcome message if the name is provided in the form data
    }
    res.status(401).send('Please provide credentials'); // Send an error message if the name is not provided in the form data   
}); // Create a login route
