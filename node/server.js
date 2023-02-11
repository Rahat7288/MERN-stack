// importing the http modules to use
const http = require('http')
// creating the server
http.createServer(function(req, res){
    // routes for node
    if(req.url === '/'){
        res.end('hello to new home')
    }
    else if(req.url === '/game'){
        res.end('hello form game page')
    }
    else if(req.url === '/user'){
        res.end('hello from users')
    }
}).listen(3000)