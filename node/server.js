// importing the http modules to use
const http = require('http')
// creating the server
http.createServer(function(req, res){
    // routes for node
    if(req === '/'){
        res.end('hello to new home')
    }
    else if(req === '/game'){
        res.end('hello form game page')
    }
    else if(req === '/user'){
        res.end('hello from users')
    }
}).listen(5000)