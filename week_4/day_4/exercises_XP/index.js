/**************************************************************
 🌟 Exercise 1 : HTML Form (GET)
**************************************************************/

/*

<form action="" method="GET">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>

  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea><br><br>

  <input type="submit" value="Send">
</form>

Explanation:
   - GET method appends the form data to the URL as query parameters.
   - When you click Send, you'll see the data in the browser's address bar like:
     ?name=John&message=Hello
   - This is visible and can be bookmarked or shared.
*/



/**************************************************************
 🌟 Exercise 2 : HTML Form #2 (POST)
**************************************************************/

/*


<form action="" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name"><br><br>

  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea><br><br>

  <input type="submit" value="Send">
</form>

 Explanation:
   - POST method sends form data in the HTTP request body, not the URL.
   - The data is not visible in the address bar.
   - To see it, open the browser DevTools → Network Tab → submit the form → check the request payload.
   - POST is more secure for sensitive data because it's not in the URL.
*/



/**************************************************************
 🌟 Exercise 3 : JSON Mario
**************************************************************/

// JS object provided
const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

//  Convert JS object to JSON string
const marioJSON = JSON.stringify(marioGame);
console.log(marioJSON);

//  Explanation:
//   - JSON.stringify converts the JS object into a JSON string
//   - Nested objects (characters) are also converted as JSON objects
//   - Keys and values remain intact, just the type changes from JS object to string

//  Pretty print JSON
const marioPretty = JSON.stringify(marioGame, null, 2); // 2 spaces for indentation
console.log(marioPretty);

//  Explanation:
//   - Pretty print makes the JSON readable with indentation
//   - Useful for debugging or saving to files

/*
 Debugger tip:
   - Add a breakpoint in browser DevTools
   - Inspect marioJSON or marioPretty
   - You can explore nested objects in the debugger to see structure and values
*/
