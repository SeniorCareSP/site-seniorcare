const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'site', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'site', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
