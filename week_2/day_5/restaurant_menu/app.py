from flask import Flask, render_template, request, redirect, url_for
import psycopg2
# Ajout d'une ligne pour gérer les erreurs et indiquer qu'il manque un package
from werkzeug.exceptions import abort 

app = Flask(__name__)

DB_NAME = "db_restaurant"  
DB_USER = "postgres"           
DB_PASSWORD = "sara" 
DB_HOST = "localhost"
DB_PORT = "5432"

# Connexion à PostgreSQL
def get_db_connection():
    try:
        conn = psycopg2.connect(
            dbname=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
            host=DB_HOST,
            port=DB_PORT
        )
        return conn
    except psycopg2.OperationalError as e:
        # En cas d'erreur de connexion (mauvais mot de passe/host/port), 
        # tu auras un message plus clair dans la console.
        print(f"Erreur de connexion à la base de données : {e}")
        # Optionnellement, tu peux vouloir arrêter l'application ici
        # ou rediriger vers une page d'erreur.
        abort(500, description="Impossible de se connecter à la base de données. Vérifie ta configuration.")


#  Route 1 : Afficher tout le menu
@app.route("/") # Ajout d'une route racine pour l'accueil
@app.route("/menu")
def menu():
    conn = get_db_connection()
    cur = conn.cursor()
    # Gestion des erreurs pour les colonnes non trouvées (si le schéma change)
    try:
        cur.execute("SELECT item_id, item_name, item_price FROM Menu_Items ORDER BY item_id;")
        items = cur.fetchall()
        return render_template("menu.html", items=items)
    except psycopg2.errors.UndefinedTable:
        # Affiche un message d'erreur si la table n'existe pas
        return render_template("menu.html", items=[], error="La table Menu_Items n'existe pas. Veuillez l'initialiser.")
    finally:
        cur.close()
        conn.close()

#  Route 2 : Ajouter un nouvel item
@app.route("/add", methods=["GET", "POST"])
def add_item():
    if request.method == "POST":
        name = request.form["name"]
        # Assure-toi que le prix est un nombre avant d'essayer de l'insérer
        try:
            price = float(request.form["price"])
        except ValueError:
            # Gérer le cas où le prix n'est pas un nombre valide
            return "Prix invalide", 400

        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (name, price))
        conn.commit()
        cur.close()
        conn.close()

        return redirect(url_for("menu"))
    return render_template("add_item.html")

#  Route 3 : Supprimer un item
@app.route("/delete/<int:item_id>")
def delete_item(item_id):
    conn = get_db_connection()
    cur = conn.cursor()
    # Utilisation de item_id (variable Python) pour cibler la colonne 'id' (colonne SQL)
    cur.execute("DELETE FROM Menu_Items WHERE item_id = %s", (item_id,))
    conn.commit()
    cur.close()
    conn.close()
    return redirect(url_for("menu"))

#  Route 4 : Mettre à jour un item
@app.route("/update/<int:item_id>", methods=["GET", "POST"])
def update_item(item_id):
    conn = get_db_connection()
    cur = conn.cursor()

    if request.method == "POST":
        new_name = request.form["name"]
        # Assure-toi que le prix est un nombre
        try:
            new_price = float(request.form["price"])
        except ValueError:
            return "Prix invalide", 400

        # Utilisation de item_id (variable Python) pour cibler la colonne 'id' (colonne SQL)
        cur.execute("UPDATE Menu_Items SET item_name=%s, item_price=%s WHERE item_id=%s",
                    (new_name, new_price, item_id))
        conn.commit()
        cur.close()
        conn.close()
        return redirect(url_for("menu"))

    # Pré-remplir le formulaire (GET) - Utilisation de item_id (variable Python)
    cur.execute("SELECT item_id, item_name, item_price FROM Menu_Items WHERE item_id = %s", (item_id,))
    item = cur.fetchone()
    cur.close()
    conn.close()
    
    # Gérer le cas où l'item n'existe pas
    if item is None:
        abort(404)
        
    return render_template("update_item.html", item=item)

if __name__ == "__main__":
    app.run(debug=True)
