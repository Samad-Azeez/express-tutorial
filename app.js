import http from 'http';
const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello, welcome to my server</h1>');
        res.end();
        
    }else if (req.url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>About us</h1>');
        res.end();
    }else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>Page not found</h1>');
        res.end();
    };
});

server.listen(3000);