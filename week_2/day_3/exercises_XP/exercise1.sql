-- 🌟 Exercise 1: DVD Rental
-- Instructions
-- Get a list of all the languages, from the language table.
select * from language ;
-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.

select f.title, f.description, l.name FROM film AS f INNER JOIN language AS l ON f.language_id = l.language_id ;

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
select * FROM language AS l LEFT JOIN film AS f ON l.language_id = f.language_id ;


-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
INSERT INTO new_film (name) VALUES ('Inception'), ('The Matrix'), ('Interstellar');
-- Create a new table called customer_review, which will contain film reviews that customers will make.
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT NOT NULL,
    language_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
    FOREIGN KEY (language_id) REFERENCES language(language_id)
);
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO customer_review (film_id, language_id, title, score, review_text) VALUES 
(1, 1, 'Amazing Movie', 9, 'This movie was mind-blowing and kept me on the edge of my seat!'),
(2, 1, 'Classic Sci-Fi', 8, 'A timeless classic that still holds up today.');
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id = 1 returning *;
select * from customer_review;