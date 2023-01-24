// were  you born on a leap year? - CLI App
let readlineSync = require("readline-sync");
//  ****************************************

// let userName = readlineSync.question("Enter your name : ");
let userAge = readlineSync.question("Enter year of your Date of birth : ");
// userAge = Number.parseInt(userAge);

function check(age) {
    let ageLength = age.length;
    ageNum = Number.parseInt(age);
    if(ageNum % 4 === 0 && ageLength === 4 && (ageNum >=1900 && ageNum <= 2023)){
        console.log("It's a leap year.");
    }else if(ageLength !== 4 || (age != ageNum) || (ageNum <=1900 || ageNum >= 2023)){
        console.log("Error: Invalid input");
    }
    else{
        console.log("It's not a leap year.");
    }
}

check(userAge);


