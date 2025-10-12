/**************************************************************
 🌟 Exercise 1 : Bird Class
**************************************************************/

// Code given:
class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸"); // ❌ Issue: trying to use 'this' or call console.log before super() in a subclass
    super(); // must call super() before using 'this' in derived class
  }
}

// const pet = new Flamingo();

//  Corrected version:
class FlamingoFixed extends Bird {
  constructor() {
    super(); // call parent constructor first
    console.log("I'm pink. 🌸"); // now safe to use
  }
}

const petFixed = new FlamingoFixed();
// Output:
// "I'm a bird. 🦢"
// "I'm pink. 🌸"
