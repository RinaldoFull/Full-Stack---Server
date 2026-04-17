const http = require('http');
const fs = require('fs')
const name = "Rinaldo"

http.createServer((req, res)=>{
    file = fs.readfile("./index.html", "utf-8")
    file = file.replace("{{mudar}}",name)
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(file)
});

server.listen(3000, console.log("Servidor rodando na porta 3000"))