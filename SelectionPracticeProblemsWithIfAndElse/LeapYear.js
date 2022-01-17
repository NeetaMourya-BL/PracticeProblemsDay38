/** Check leap year */
const prompts = require("prompt-sync")();
let year = prompts("Enter the year : ");
let a=year%4;
let b=year%100;
let c=year%400;
if ((a ==0 && (b != 0 | c == 0)))
console.log("Enter year is leap year: " +year);
else
console.log("Enter year is not leap year: " +year);
