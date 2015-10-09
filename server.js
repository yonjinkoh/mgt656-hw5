var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/nickname', function(request, response) {
    response.send('yawning-yam');
});

app.listen(process.env.PORT || 4000,
process.env.IP || 'localhost');