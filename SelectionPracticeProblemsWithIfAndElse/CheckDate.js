//day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
const prompts = require("prompt-sync")();
let day = prompts("Enter day  : ");
let month = prompts("Enter month : ");
month.toLowerCase;
if ((month <= 6 & day <= 20))
{
console.log(true);
}
else if (( month >= 3 & month < 6) & (day < 31) )
{
console.log(true);
}
else
{
    console.log(false);
}