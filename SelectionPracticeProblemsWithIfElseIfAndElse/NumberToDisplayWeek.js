/** Number to display week */
const prompts = require("prompt-sync")();
let number = prompts("Enter the number : ");
if (number == 0) {
    console.log("Sunday")
}
else if (number == 1) {
    console.log("Monday")
}
else if (number == 2) {
    console.log("Tuesday")
}
else if (number == 3) {
    console.log("Wednesday")
}
else if (number == 4) {
    console.log("Friday")
}
else if (number == 5) {
    console.log("Saturday")
}
else if (number == 6) {
    console.log("Sunday")
}
else
    console.log("not a week day");