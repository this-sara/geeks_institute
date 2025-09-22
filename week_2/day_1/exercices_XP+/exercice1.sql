-- Create
-- Create a database called bootcamp.
CREATE DATABASE bootcamp;
-- Create a table called students.
-- Add the following columns:
-- id
-- last_name
-- first_name
-- birth_date
-- The id must be auto_incremented.
-- Make sure to choose the correct data type for each column.
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    last_name VARCHAR(50),
    first_name VARCHAR(50),
    birth_date DATE
);
-- To help, here is the data that you will have to insert. (How do we insert a date to a table?)
INSERT INTO students (first_name, last_name, birth_date) VALUES
('Marc', 'Benichou', '1998-11-02'),
('Yoan', 'Cohen', '2010-12-03'),
('Lea', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');
-- (⚠️ Les dates doivent être au format YYYY-MM-DD en SQL.)
INSERT INTO students (first_name, last_name, birth_date)
VALUES ('Sara', 'Hassani', '2001-05-06');  
--1
SELECT * FROM students;
--2
SELECT first_name, last_name FROM students;
--3_1
SELECT first_name, last_name FROM students
WHERE id = 2;
--3_2
SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' AND first_name = 'Marc';
--3_3
SELECT first_name, last_name FROM students
WHERE last_name = 'Benichou' OR first_name = 'Marc';
--3_4
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a%';   -- PostgreSQL (case-insensitive)
---3_5
SELECT first_name, last_name FROM students
WHERE first_name ILIKE 'a%';
---3_6
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a';
--3_7
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a_';
--3_8
SELECT first_name, last_name FROM students
WHERE id IN (1, 3);
--4
SELECT * FROM students
WHERE birth_date >= '2000-01-01';
