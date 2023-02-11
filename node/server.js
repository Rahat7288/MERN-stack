const http = require('http')

http.createServer(function(req, res){
    res.end('hello world from server')
}).listen(3000)

