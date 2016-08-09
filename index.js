var express = require('express');
var app = express();

var port = process.env.PORT || 8080; 

app.get('/', function(req, res){
    res.json({ 
        'IP': req.headers['x-forwarded-for'] ||req.connection.remoteAddress,
        'language': req.headers["accept-language"].split(',')[0],
        'os': req.headers['user-agent'].split(' (')[1].split(') ')[0],
    });
});

app.listen(port, function () {
  console.log('Node app listening on port ' + port + '!');
});