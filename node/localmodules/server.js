const http = require('http')
const dbinfo = require('./dbinfo')
http.createServer(function(req, res){
    if(req.url === '/'){
        res.end('local modules '+dbinfo.name)
    }
    else if(req.url === '/home'){
        res.end('database info '+dbinfo.port)
    }
}).listen(3000)