from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    print("Menu:")
    print("V - View an Item")
    print("A - Add an Item")
    print("D - Delete an Item")
    print("U - Update an Item")
    print("S - Show the Menu")
    print("E - Exit")

def add_item_to_menu():
    name = input("Enter item name: ")
    price = int(input("Enter item price: "))
    item = MenuItem(name, price)
    item.save()

def remove_item_from_menu():
    name = input("Enter item name to delete: ")
    item = MenuItem(name, 0)
    item.delete()

def update_item_from_menu():
    name = input("Enter item name to update: ")
    new_name = input("Enter new name: ")
    new_price = int(input("Enter new price: "))
    item = MenuItem(name, 0)
    item.update(new_name, new_price)

def show_restaurant_menu():
    items = MenuManager.all_items()
    for item in items:
        print(f"ID: {item[0]}, Name: {item[1]}, Price: {item[2]}")

def main():
    while True:
        show_user_menu()
        choice = input("Choose an option: ").upper()
        if choice == 'V':
            name = input("Enter item name: ")
            item = MenuManager.get_by_name(name)
            print(item if item else "Item not found.")
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'E':
            print("Exiting program...")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Try again.")

if __name__ == "__main__":
    main()