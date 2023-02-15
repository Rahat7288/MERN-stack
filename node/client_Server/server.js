const express = require ('express')

var app = express()


app.get('/',(req,res)=>{
    res.send('this is home page api');
});

app.get('/usernames',(req,res)=>{
    var users = ['asad', 'rahat', 'niloy', 'ritesh']
    res.send(users);
})


app.listen(5000,()=>{
    console.log('server started on port 5000')
});