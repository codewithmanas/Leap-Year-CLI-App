// were  you born on a leap year? - CLI App
let readlineSync = require("readline-sync");
//  ****************************************

let userName = readlineSync.question("Enter your name : ");
console.log("Welcome " + userName + " to Leap Year CLI App");
let userAge = readlineSync.question("Enter year of your Date of birth : ");

function check(age) {
    let ageNum = Number.parseInt(age);
    if((ageNum % 400 == 0) || (ageNum % 100 != 0 && ageNum % 4 == 0)){
        console.log("It's a leap year.");
    }else if(age != ageNum){
        console.log("Error: Invalid input");
    }
    else{
        console.log("It's not a leap year.");
    }
}

check(userAge);
