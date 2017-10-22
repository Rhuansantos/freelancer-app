const express = require('express');
const app = express();
const https = require('https');
const http = require('http');
const fs = require('fs');



const port = 3000;




const options = {
  key: fs.readFileSync('./encryption/client-key.pem'),
  cert: fs.readFileSync('./encryption/client-cert.pem')
}


// https.createServer(options, function (req, res) {
//   res.writeHead(200);
//   res.end("hello world\n");
// }).listen(3000);

// app.listen(port, function() {
//   console.log('Server running on port: '+ port);
// });

http.createServer(app).listen(8080);
https.createServer(options, app).listen(8000);

// https.createServer(options, app).listen(8000);



const appJS = require('./app/app.js')
appJS(app);