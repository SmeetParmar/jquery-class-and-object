"use strict";

// creating a class named Coins...
class Coins
{

    // defining constructor....
    constructor()
    {
        // initializing variables...
        this.quarters= 0;
        this.dimes= 0;
        this.nickels= 0;
        this.pennies= 0;
    }

    // defining method for calculation....
    makeChange(cents)
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
}