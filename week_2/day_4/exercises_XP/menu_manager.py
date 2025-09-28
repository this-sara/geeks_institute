import psycopg2

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        try:
            connection = psycopg2.connect(database="db_restaurant", user="postgres", password="sara")
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
            item = cursor.fetchone()
            return item if item else None
        except Exception as e:
            print(f"Error: {e}")
        finally:
            cursor.close()
            connection.close()

    @classmethod
    def all_items(cls):
        try:
            connection = psycopg2.connect(database="restaurant_menu", user="postgres", password="your_password")
            cursor = connection.cursor()
            cursor.execute("SELECT * FROM Menu_Items")
            items = cursor.fetchall()
            return items
        except Exception as e:
            print(f"Error: {e}")
        finally:
            cursor.close()
            connection.close()