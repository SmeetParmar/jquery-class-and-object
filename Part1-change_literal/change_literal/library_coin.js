"use strict";

// defining an object literal....
let coins = {

    // defining properties....
    quarters: 0, dimes: 0, nickels: 0, pennies: 0,

    // defining method....
    makeChange: function(cents)
    {
      if (isNaN(cents) || cents < 0 || cents > 99) 
      {
        //throwing the exception....
        throw "Invalid amount. Please enter a positive value.";
      } 
      else 
      {
        // calculating quaters, dimes, nickels and pennies....
        this.quarters = Math.floor(cents / 25);
        cents %= 25;
        this.dimes = Math.floor(cents / 10);
        cents %= 10;
        this.nickels = Math.floor(cents / 5);
        cents %= 5;
        this.pennies = cents;
      }
    }
  };
  
  // making a global object so that we can access it in other js files....
  window.coins = coins;
  