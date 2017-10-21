const express = require('express');
const app = express();
const https = require('https')
const port = 8000;



const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}

app.listen(port, function() {
  console.log('Server running on port: '+ port);
});

const appJS = require('./app/app.js')
appJS(app);