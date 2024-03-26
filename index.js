#!/usr/bin/env node
import inquirer from "inquirer";
//1. Comouter will generate a random number 
//2.User will input a vakue to guess the number
//3.Comouter will compare the values and give a feedback 
const Randomnumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessednumber",
        type: "number",
        message: "Kindly guess a number between:1-5",
    }
]);
if (answers.UserGuessednumber === Randomnumber) {
    console.log("Congratulations! You guessed the right number");
}
else {
    console.log("Sorry! You guessed the wrong number");
}
