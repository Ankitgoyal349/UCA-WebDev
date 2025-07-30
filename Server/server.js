var express=require('express');
var app=express();

var port=8080;
app.use(express.static('FrontEnd'));

// when we listen to a port node is running as runtime environment for js
// https - defult port 443
// http - port : 80

app.listen(port,function(){
    console.log('Server is running on http://localhost:'+port);
})