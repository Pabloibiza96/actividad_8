CREATE DATABASE blog;
USE blog;

-- Tabla de autores
CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    image VARCHAR(255)
);

-- Tabla de posts
CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    category VARCHAR(100),
    author_id INT NOT NULL,
    FOREIGN KEY (author_id) REFERENCES authors(id)
);