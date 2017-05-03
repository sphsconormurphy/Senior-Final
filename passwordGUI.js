const readline = require('readline');
const testString  =require('./string');


function getString(){
    let password = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    password.question("What would you like to set as your password?", function(str){
        let passesAllChecks = false;

        //Conditional Statements here.
        if(teststring.containsUpper(str) && teststring.containsLower(str) && teststring.containsNumerical(str) && teststring.containsSpecial(str)  && teststring.checkLength(str)){
          let passesAllChecks = true;
        }

        if(!passesAllChecks){
            console.log("\nTry again\n");
            password.close();
            getString();
        }
        else{
            console.log("\nGreat password. Bye bye now...\n");
            password.close();
        }
    });
}

getString();
