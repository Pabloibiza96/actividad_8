const db = require('../config/db');

// Obtener todos los posts con datos del autor
exports.getAllPosts = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT posts.*, authors.name AS author_name, authors.email, authors.image
      FROM posts
      JOIN authors ON posts.author_id = authors.id
    `);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener posts" });
  }
};

// Obtener un post por ID con datos del autor
exports.getPostById = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT posts.*, authors.name AS author_name, authors.email, authors.image
      FROM posts
      JOIN authors ON posts.author_id = authors.id
      WHERE posts.id = ?
    `, [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener post" });
  }
};

// Crear un post
exports.createPost = async (req, res) => {
  const { title, description, category, author_id } = req.body;

  try {
    await db.query(`
      INSERT INTO posts (title, description, category, author_id)
      VALUES (?, ?, ?, ?)
    `, [title, description, category, author_id]);

    res.status(201).json({ message: "Post creado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear post" });
  }
};

// Posts de un autor concreto
exports.getPostsByAuthor = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT posts.*, authors.name AS author_name
      FROM posts
      JOIN authors ON posts.author_id = authors.id
      WHERE author_id = ?
    `, [req.params.authorId]);

    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener posts del autor" });
  }
};