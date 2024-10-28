const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Serve the Flutter web app from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route all other requests to the Flutter app's `index.html` for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
