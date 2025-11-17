const express = require('express');
const db = require('./config/db');
const authorsRoutes = require('./routes/authors');
const postsRoutes = require('./routes/posts');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/authors', authorsRoutes);
app.use('/api/posts', postsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});