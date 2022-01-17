//reads 5 Random 2 Digit values ,then find their sum and the average
var randomDiceNumber1=Math.floor(Math.random()*90)+10;
console.log("First Random Dice Number: "  +randomDiceNumber1);
var randomDiceNumber2=Math.floor(Math.random()*90)+10;
console.log("Second Random Dice Number: "  +randomDiceNumber2);
var randomDiceNumber3=Math.floor(Math.random()*90)+10;
console.log("Third Random Dice Number: "  +randomDiceNumber3);
var randomDiceNumber4=Math.floor(Math.random()*90)+10;
console.log("Fourth Random Dice Number: "  +randomDiceNumber4);
var randomDiceNumber5=Math.floor(Math.random()*90)+10;
console.log("Fifth Random Dice Number: "  +randomDiceNumber5);
var additionOfRandomDice=randomDiceNumber1+randomDiceNumber2+randomDiceNumber3+randomDiceNumber4+randomDiceNumber5;
console.log("Addition of 5 Random 2 Digit values is: " +additionOfRandomDice);
var averageOfRandomDice=additionOfRandomDice/5;
console.log("Addition of 5 Random 2 Digit values is: " +averageOfRandomDice);