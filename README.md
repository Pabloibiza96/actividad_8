API Blog – Actividad 8

API REST sencilla desarrollada en Node.js + Express, usando MySQL como base de datos.
Permite gestionar autores y posts, incluyendo la relación entre ambos.

⸻

Tecnologías utilizadas
	•	Node.js
	•	Express
	•	MySQL
	•	mysql2
	•	dotenv

⸻

Ejecutar el proyecto

	1.	Instalar dependencias:

npm install


	2.	Crear un archivo .env en la raíz del proyecto (no se sube a GitHub):

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_PORT=3306
DB_NAME=blog


	3.	Iniciar el servidor:

npm start

El servidor estará disponible en:

http://localhost:3000

⸻

Rutas de la API

—– Autores —–

Obtener todos los autores:
GET /api/authors

Obtener un autor por ID:
GET /api/authors/:id

Crear un autor:
POST /api/authors
Content-Type: application/json

{
“name”: “Nombre”,
“email”: “email@ejemplo.com”,
“image”: “https://imagen.com/foto.jpg”
}

⸻

—– Posts —–

Obtener todos los posts (incluye datos del autor):
GET /api/posts

Obtener un post por ID:
GET /api/posts/:id

Crear un post:
POST /api/posts
Content-Type: application/json

{
“title”: “Título”,
“description”: “Contenido del post”,
“category”: “general”,
“author_id”: 1
}

Obtener posts de un autor concreto:
GET /api/posts/author/:authorId

⸻

Estructura del proyecto

src/
├─ app.js
├─ config/
│   └─ db.js
├─ controllers/
│   ├─ authors.controller.js
│   └─ posts.controller.js
└─ routes/
├─ authors.js
└─ posts.js

⸻

Autor

Pablo Ibiza Granados
