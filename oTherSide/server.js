const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const server = http.createServer((req, res) => {                                      //server create
    console.log('Server request');
    console.log(req.url, req.method);
    
    if (req.url = '/') {
        fs.readFile('./inc/Index.html', (err, data) => {
            if (err) {
                console.log(err);
                res.end();
            }
            else {
                res.write(data);
                res.end();
            }
        });
    }


/*   
    res.setHeader('Content-Type', 'text/html');                                       //response to client
    res.write('<head><link rel="stylesheet" href="#"></head>');
    res.write('<h1>Hello pidar</h1>');
    res.write('<p>Hello, my name is...</p>');                                                         
    res.end();*/
});

server.listen(3000, 'localhost', (error) => {                                         //start server
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});
