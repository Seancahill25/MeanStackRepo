var express = require("express");
var app = express();

app.set("port", process.env.PORT);

app.get('/', function(req, res) {
    res.send('Good Morning Career Devs!!!');
});
    

var server = app.listen(app.get("port"), function() {
    var port = server.address().port;
    console.log("This is port " + port);  
});