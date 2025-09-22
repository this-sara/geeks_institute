--1
SELECT first_name, last_name, birth_date
FROM students
ORDER BY last_name ASC
LIMIT 4;

--2
SELECT first_name, last_name, birth_date
FROM students
ORDER BY birth_date DESC
LIMIT 1;

SELECT first_name, last_name, birth_date
FROM students
WHERE birth_date = (SELECT MAX(birth_date) FROM students);

--3
SELECT first_name, last_name, birth_date
FROM students
ORDER BY id
LIMIT 3 OFFSET 2;
