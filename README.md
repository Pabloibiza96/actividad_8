CREAR ARCHIVO .ENV CON LAS SIGUIENTES VARIABLES:

PORT=3000
NODE_ENV=development

DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=blog
DB_PORT=3306



# Rutas disponibles de la API

## Autores

### Obtener todos los autores
GET http://localhost:3000/api/authors

### Obtener un autor por ID
GET http://localhost:3000/api/authors/:id

### Crear un autor
POST http://localhost:3000/api/authors
Body (JSON):
{
  "name": "Nombre del autor",
  "email": "email@ejemplo.com",
  "image": "https://imagen.com/foto.jpg"
}


## Posts

### Obtener todos los posts (incluye datos del autor)
GET http://localhost:3000/api/posts

### Obtener un post por ID
GET http://localhost:3000/api/posts/:id

### Crear un post
POST http://localhost:3000/api/posts
Body (JSON):
{
  "title": "Título del post",
  "description": "Contenido del post",
  "category": "Categoría",
  "author_id": 1
}

### Obtener todos los posts escritos por un autor concreto
GET http://localhost:3000/api/posts/author/:authorId