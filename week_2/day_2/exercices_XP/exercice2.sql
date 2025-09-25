--1 In the dvdrental database write a query to select all the columns from the “customer” table.
select * from actor ;
--2 In the dvdrental database write a 
select first_name ||''||last_name as fullname from actor ;
--3
select DISTINCT create_date  FROM customer ;
--4
select * from customer ORDER BY first_name ASC ;
--5 Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
select film_id,title,description,release_year,rental_rate from film ORDER BY rental_rate ASC ;
--6 Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT address, phone_number
FROM address
WHERE district = 'Texas';
-- 7 Write a query to get all the details of the films with film IDs 15 and 150.
select * from film where film_id in (15,150);

-- 8 Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT title from film LIMIT 3;
SELECT 
    CASE 
        WHEN EXISTS (
            SELECT * 
            FROM film 
            WHERE title = 'Chamber Italian'
        ) THEN 'Movie exists'
        ELSE 'Movie does not exist'
    END AS movie_status;


SELECT 
    film_id,
    title,
    description,
    length,
    rental_rate,
    'Movie exists' AS movie_status
FROM film
WHERE title = 'Chamber '

UNION ALL

SELECT 
    NULL AS film_id,
    NULL AS title,
    NULL AS description,
    NULL AS length,
    NULL AS rental_rate,
    'Movie does not exist' AS movie_status
WHERE NOT EXISTS (
    SELECT 1 
    FROM film 
    WHERE title = 'Chamber Italian'
);
--9 Write a query to get the film ID, title, description, length and rental rate of all the films with titles starting with the letter “Ch”.
SELECT film_id, 
       title, 
       description, 
       length, 
       rental_rate
FROM film
WHERE title LIKE 'Ch%';


--10 Write a query to get the film ID, title, description, length and rental rate of the 10 cheapest films.
SELECT film_id, 
       title, 
       description, 
       length, 
       rental_rate
FROM film
ORDER BY rental_rate , title ASC
LIMIT 10;

-- 11 Not satisfied with the results. Write a query which will find the next 10 cheapest movies.Bonus: Try to not use LIMIT.
SELECT film_id, title, rental_rate
FROM (
    SELECT film_id, title, rental_rate,
           ROW_NUMBER() OVER (ORDER BY rental_rate ASC, title ASC) AS row_num
    FROM film
) AS ranked
WHERE row_num BETWEEN 11 AND 20;
-- 12 Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).

select first_name,last_name,amount,payment_date from customer
inner join payment on customer.customer_id=payment.customer_id
order by customer.customer_id ASC ;

-- 13 You need to check your inventory. Write a query to get all the movies which are not in inventory.
select * from film where film_id not in (select film_id FROM inventory);

-- 14 Write a query to find which city is in which country.
SELECT city , country from city INNER JOIN country on city.country_id=country.country_id ;
-- 15 Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
select customer.customer_id,customer.first_name,customer.last_name,payment.amount,payment.payment_date,staff.staff_id FROM
customer INNER JOIN payment on customer.customer_id=payment.customer_id
INNER JOIN staff on payment.staff_id=staff.staff_id;