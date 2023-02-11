const express = require('express')

const app = express()

app.get('/',function(req, res){
    res.end('this is hello world homepage using express')
})

app.listen(5000, function(){
    console.log('Connection success')
})