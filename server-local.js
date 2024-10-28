const https = require('https');
const fs = require('fs');
const app = require('./app');

// Set HTTPS port, defaulting to 4000
const httpsPort = process.env.HTTPS_PORT || 3008;

// HTTPS options with paths to certificate and key files
const options = {
  key: fs.readFileSync('/home/ubuntu/cert/privkey.pem'),
  cert: fs.readFileSync('/home/ubuntu/cert/fullchain.pem')
};

// Create and start the HTTPS server
https.createServer(options, app).listen(httpsPort, () => {
  console.log(`Flutter web app running securely at https://localhost:${httpsPort}/policies`);
});
