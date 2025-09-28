import psycopg2

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        try:
            connection = psycopg2.connect(database="db_restaurant", user="postgres", password="sara")
            cursor = connection.cursor()
            cursor.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (self.name, self.price))
            connection.commit()
            print(f"Item '{self.name}' added successfully.")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            cursor.close()
            connection.close()

    def delete(self):
        try:
            connection = psycopg2.connect(database="restaurant_menu", user="postgres", password="your_password")
            cursor = connection.cursor()
            cursor.execute("DELETE FROM Menu_Items WHERE item_name = %s", (self.name,))
            connection.commit()
            print(f"Item '{self.name}' deleted successfully.")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            cursor.close()
            connection.close()

    def update(self, new_name, new_price):
        try:
            connection = psycopg2.connect(database="restaurant_menu", user="postgres", password="your_password")
            cursor = connection.cursor()
            cursor.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", (new_name, new_price, self.name))
            connection.commit()
            print(f"Item '{self.name}' updated to '{new_name}' with price {new_price}.")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            cursor.close()
            connection.close()