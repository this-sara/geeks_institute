-- 3. Compter combien d’acteurs il y a dans la table
SELECT COUNT(*) AS total_actors
FROM actors;
-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
INSERT INTO actors (first_name, last_name)
VALUES ('', '');
-- The blank fields will appear as an empty string ''
INSERT INTO actors (first_name)
VALUES ('Tom');   -- last_name restera NULL

-- The blank fields will appear as NULL
