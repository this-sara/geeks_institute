import psycopg2 , requests, random

def get_db_connection():
    conn = psycopg2.connect(
        host="localhost",
        database="db_test",
        user="postgres",
        password="sara"
    )
    return conn

def get_random_countries(n=10):
    url = "https://restcountries.com/v3.1/all?fields=name,capital,flags,subregion,population"
    response = requests.get(url)

    # Check HTTP status code
    if response.status_code != 200:
        raise Exception(f"API request failed with status {response.status_code}: {response.text}")

    countries = response.json()

    # Make sure it is a list
    if not isinstance(countries, list):
        raise TypeError(f"Expected a list, got {type(countries)}: {countries}")

    # Select 10 random countries
    return random.sample(countries, n)



def format_country_data(country):
    return {
        "name": country.get("name", {}).get("common", "Unknown"),
        "capital": country.get("capital", ["Unknown"])[0],
        "flag": country.get("flags", {}).get("png", ""),
        "subregion": country.get("subregion", "Unknown"),
        "population": country.get("population", 0)
    }


def save_countries_to_db(countries):
    conn = get_db_connection()
    cursor = conn.cursor()

    for country in countries:
        data = format_country_data(country)
        cursor.execute("""
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
            """, 
            (data['name'], data['capital'], data['flag'], data['subregion'], data['population'])
        )

    conn.commit()
    cursor.close()
    conn.close()


if __name__ == "__main__":
    random_countries = get_random_countries(10)
    save_countries_to_db(random_countries)
    print("10 random countries saved to database successfully!")
