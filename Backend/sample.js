var http = require('http')

http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    })
    res.end('Hello World\n')
}).listen(8000)

console.log("Server running on port 8000")