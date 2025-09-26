--  Exercise 2 : DVD Rental

-- 1. Update the language of some films
UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE film_id IN (1, 2, 3); 

-- 2. Find foreign keys in the customer table

SELECT
    tc.constraint_name, 
    kcu.column_name, 
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM 
    information_schema.table_constraints AS tc 
    JOIN information_schema.key_column_usage AS kcu
      ON tc.constraint_name = kcu.constraint_name
    JOIN information_schema.constraint_column_usage AS ccu
      ON ccu.constraint_name = tc.constraint_name
WHERE tc.table_name = 'customer' AND tc.constraint_type = 'FOREIGN KEY';

-- 3. Drop the customer_review table
DROP TABLE customer_review;

-- 4. Find the number of rentals still outstanding
SELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;

-- 5. Find the 30 most expensive movies still outstanding
SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

-- 6. Help your friend find the movies he wants to rent

-- a. The 1st film: Sumo wrestler with Penelope Monroe
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE f.description ILIKE '%sumo%' AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';

-- b. The 2nd film: Short documentary (< 1 hour), rated "R"
SELECT title
FROM film
WHERE length < 60 AND rating = 'R';

-- c. The 3rd film: Rented by Matthew Mahan, paid > $4.00, returned between 28 July and 1 August 2005
SELECT f.title
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND r.rental_rate > 4.00
  AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- d. The 4th film: Watched by Matthew Mahan, contains "boat" in title or description
SELECT f.title
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;