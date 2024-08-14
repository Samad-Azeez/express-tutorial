import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static('./navbar-app'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.all('*', (req, res) => {
    res.send('<h1>resource not found</h1>');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});