var http = require('http');
http.createServer(function(req,res){
    res.write('Brasil 4 x 2 Servia \n');
    res.end('bom dia!');
    

}).listen(8080);
