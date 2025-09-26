-- Part I: One-to-One Relationship

-- Create Customer table
CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

-- Create Customer Profile table
CREATE TABLE Customer_Profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INT UNIQUE REFERENCES Customer(id)
);

-- Insert customers
INSERT INTO Customer (first_name, last_name)
VALUES 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert customer profiles using subqueries
INSERT INTO Customer_Profile (isLoggedIn, customer_id)
VALUES 
(true, (SELECT id FROM Customer WHERE first_name = 'John')),
(false, (SELECT id FROM Customer WHERE first_name = 'Jerome'));

-- Query: First name of logged-in customers
SELECT c.first_name
FROM Customer c
JOIN Customer_Profile p ON c.id = p.customer_id
WHERE p.isLoggedIn = true;

-- Query: All customers with their isLoggedIn status
SELECT c.first_name, p.isLoggedIn
FROM Customer c
LEFT JOIN Customer_Profile p ON c.id = p.customer_id;

-- Query: Number of customers not logged in
SELECT COUNT(*) AS not_logged_in_count
FROM Customer c
LEFT JOIN Customer_Profile p ON c.id = p.customer_id
WHERE p.isLoggedIn IS DISTINCT FROM true;

-- Part II: Many-to-Many Relationship

-- Create Book table
CREATE TABLE Book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(100) NOT NULL
);

-- Insert books
INSERT INTO Book (title, author)
VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To Kill a Mockingbird', 'Harper Lee');

-- Create Student table
CREATE TABLE Student (
    student_id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    age INT CHECK (age <= 15)
);

-- Insert students
INSERT INTO Student (name, age)
VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Create Library table (junction table)
CREATE TABLE Library (
    book_fk_id INT REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
    student_fk_id INT REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    borrowed_date DATE,
    PRIMARY KEY (book_fk_id, student_fk_id, borrowed_date)
);

-- Insert records into Library table
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES
    ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'),

    ((SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'),

    ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'),

    ((SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12');

-- Query: Select all columns from the Library table
SELECT * FROM Library;

-- Query: Select student names and borrowed book titles
SELECT s.name, b.title, l.borrowed_date
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Query: Average age of students who borrowed 'Alice In Wonderland'
SELECT AVG(s.age) AS avg_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- Delete a student and observe the effect on the Library table
DELETE FROM Student WHERE name = 'Bob';