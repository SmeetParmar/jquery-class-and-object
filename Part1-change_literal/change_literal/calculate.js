"use strict";

$(document).ready( () => {
    $("#calculate").click( () => {
        
        // get the number of cents from the user
        let cents = Math.floor( parseInt( $("#cents").val() ) );

        if (isNaN(cents) || cents < 0 || cents > 99)
        {
            alert("Please enter a valid number between 0 and 99");
        }
        else 
        {
            // calling method for calculating quaters, dimes, nickles and pennies...
            window.coins.makeChange(cents);

            // display the results of the calculations
            $("#quarters").val( window.coins.quarters );
            $("#dimes").val( window.coins.dimes );
            $("#nickels").val( window.coins.nickels );
            $("#pennies").val( window.coins.pennies );
            
            // set focus on cents text box
            $("#cents").focus();
        }
    }); // end click() method
    
    // set focus on cents text box on initial load
    $("#cents").focus();
            
}); // end ready() method