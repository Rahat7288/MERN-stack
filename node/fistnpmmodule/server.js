const http = require('http')

http.createServer(function(req, res){
    res.end('this is npm nodemon test one')

}).listen(3000)