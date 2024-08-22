import { people } from '../data.js'; // Import the people array from data.js
export{getPeople, createPerson, createPersonPostman, updatePerson, deletePerson};

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people }); // Send the people array as a response
}; // Get all the people from the people array in data.js

const createPerson = (req, res) => {
    const { name } = req.body; // Get the name from the form data
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' }); // Send an error message
    }
    res.status(201).json({ success: true, person: name }); // Send a success
}; // Create a person from the form data

const createPersonPostman = (req, res) => {
    const { name } = req.body; // Get the name from the form data  
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide name value' }); // Send an error message 
    }
    res.status(201).json({ success: true, data: [...people, name] }); // Send a success message with the updated people array
}; // Create a person from the form data and add it to the people array in data.js

const updatePerson = (req, res) => {
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
}; // Update a person by id from the people array in data.js

const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id)); // Find the person by id
    if (!person) {
        return res.status(404).json({ success: false, msg: `person with id ${req.params.id} not found` }); // Send an error message if the person is not found
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id)); // Create a new array without the person
    res.status(200).json({ success: true, data: newPeople }); // Send the new array as a response
}; // Delete a person by id from the people array in data.js