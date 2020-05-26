var http = require('http');
var fs = require('fs');
//var time = require("./showTime");


http.createServer(function (req, res) {
    fs.readFile('page.html',function(err,data){

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        
        //res.write(time.myDateTime() + "\n");
        
        // Pode pegar o valor que vem após as barras no request
        // res.write(req.url);

        // Pode adicionar algo no END.
        res.end();
    });
}).listen(8080);