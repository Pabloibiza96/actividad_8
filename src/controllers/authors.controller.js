const db = require('../config/db');

// Obtener todos los autores
exports.getAllAuthors = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM authors");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener autores" });
  }
};
// Obtener un autor por ID
exports.getAuthorById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM authors WHERE id = ?", [req.params.id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: "Autor no encontrado" });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener autor" });
  }
};
// Crear un autor
exports.createAuthor = async (req, res) => {
  const { name, email, image } = req.body;

  try {
    await db.query(
      "INSERT INTO authors (name, email, image) VALUES (?, ?, ?)",
      [name, email, image]
    );
    res.status(201).json({ message: "Autor creado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al crear autor" });
  }
};