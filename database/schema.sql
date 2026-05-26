CREATE DATABASE career_portal;

USE career_portal;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    skills TEXT
);
