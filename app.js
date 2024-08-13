import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to my home page');
});

app.get('/about', (req, res) => {
    res.status(200).send('About Page');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>');
});

app.listen(3000);