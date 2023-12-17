var http = require('http')
var fs = require('fs')

http.createServer((req, res)=>{
    fs.readFile('demofile.html', (err, data)=>{
        res.writeHead(200, {"Content-Type" : 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8000);

console.log("Server running on port 8000");