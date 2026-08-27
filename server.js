const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static assets from project directory
app.use(express.static(__dirname));

// Fallback to index.html for single-page routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
