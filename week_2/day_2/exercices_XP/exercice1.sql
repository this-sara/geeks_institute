-- Exercise 1 : Items and customers

-- Instructions

-- We will work on the public database that we created yesterday.
-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest).
select * from items 
order by price asc;
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
select * from items 
where price >= 80
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name, email, phone -- inclure les colonnes que tu veux sauf customer_id
FROM Customers
ORDER BY first_name ASC
LIMIT 3;
-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name
FROM customers
ORDER BY last_name DESC;