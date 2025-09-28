CREATE TABLE Menu_Items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    item_price SMALLINT DEFAULT 0
);

INSERT INTO Menu_Items (item_name, item_price)
VALUES
('Margherita Pizza', 80),
('Cheeseburger', 65),
('Caesar Salad', 50),
('Spaghetti Bolognese', 70),
('French Fries', 30),
('Grilled Chicken', 90);

SELECT * FROM Menu_Items;
