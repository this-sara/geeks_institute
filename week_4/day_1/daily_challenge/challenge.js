

let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

displayGroceries();

const cloneGroceries = () => {
    // Copier une primitive (pass by value)
    let user = client;

    // Modifier client
    client = "Betty";

    console.log("user:", user);   // John
    console.log("client:", client); // Betty
    // user ne change pas car les primitives sont copiées par valeur

    // Copier un objet (pass by reference)
    let shopping = groceries;

    // Modifier totalPrice
    shopping.totalPrice = "35$";
    console.log("groceries.totalPrice:", groceries.totalPrice); // 35$
    // groceries est aussi modifié car shopping référence le même objet

    // Modifier paid
    shopping.other.paid = false;
    console.log("groceries.other.paid:", groceries.other.paid); // false
    //  même chose, les objets imbriqués sont par référence
};

cloneGroceries();



