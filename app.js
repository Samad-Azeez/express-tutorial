import { router } from './routes/people.js'; // Import the people route
import { login } from './routes/auth.js'; // Import the auth route
import express from 'express';// Import express

const app = express(); // Create an express app
const people = router; // Assign the people route to the people variable
const auth = login; // Assign the auth route to the auth variable

app.use(express.static('./methods-public'));  // Serve static files from the methods-public folder
app.use(express.urlencoded({extended: false})) // Parse form data
app.use(express.json()) // Parse JSON data
app.use('/api/people', people); // Use the people route
app.use('/login', auth); // Use the auth route

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
}); // Listen on port 3000