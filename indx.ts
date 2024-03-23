#! /sr/bin/env node

import inquirer from "inquirer";

// first to generate a random number from computer

let randomNumber = Math.floor(Math.random() * 10 + 1);

// Take a input from a user

const userAns = await inquirer.prompt([
  { message: "Please!  Gave a number between 1 to 10 :", name: "userNumber" ,type:"number" }
]);

// check whetheer a number is same or not 
if (userAns.userNumber ==  randomNumber ){ 
    console.log("Wow! you guess a right number ");
    
}
else { console.log("you guess wrong the right number is  "  , randomNumber);
}


