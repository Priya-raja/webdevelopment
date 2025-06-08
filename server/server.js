const http = require('http');
const fs = require('fs');
const path = require('path');
// Simple HTTP server to serve static files like HTML, JS, and images


const port = 3000;
const server = http.createServer((req,res) =>{
    console.log(`Request URL: ${req.url}`);
    
    const filePath = path.join(__dirname, req.url === "/" ? "index.html": req.url);
    const extname = String(path.extname(filePath)).toLocaleLowerCase();

    const mimeType ={
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
    }

    const contentType = mimeType[extname] || 'application/octet-stream';

    fs.readFile(filePath,(error, content) => {
        if(error){
            if(error.code === 'ENOENT'){
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('<h1>404 Not Found Bro</h1>', 'utf-8');
            }else{
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`, 'utf-8');
            }

        }else{
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    })
})

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})