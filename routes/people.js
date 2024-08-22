import express from 'express';
import { getPeople, createPerson, createPersonPostman, updatePerson, deletePerson } from '../controllers/people.js'; // Import the people controller
export const router = express.Router(); // Create a router

router.get('/', getPeople); // Get all the people from the people array in data.js; 

router.post('/', createPerson); // Create a person from the form data; 

router.post('/postman', createPersonPostman); // Create a person from the form data and add it to the people array in data.js

router.put('/:id', updatePerson); // Update a person by id from the people array in data.js

router.delete('/:id', deletePerson); // Delete a person by id from the people array in data.js