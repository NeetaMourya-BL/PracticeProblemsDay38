//5 Random 3 Digit values and then outputs the minimum and the maximum value
var n1=Math.floor(Math.random()*900)+100;
console.log("First Random Dice Number: "  +n1);
var n2=Math.floor(Math.random()*900)+100;
console.log("Second Random Dice Number: "  +n2);
var n3=Math.floor(Math.random()*900)+100;
console.log("Third Random Dice Number: "  +n3);
var n4=Math.floor(Math.random()*900)+100;
console.log("Fourth Random Dice Number: "  +n4);
var n5=Math.floor(Math.random()*900)+100;
console.log("Fifth Random Dice Number: "  +n5);
if ((n1>n2)&&(n1>n3)&&(n1>n4)&&(n1>n5)){
console.log("Maximum value = " + n1);
}
else if ((n2>n1)&&(n2>n3)&&(n2>n4)&&(n2>n5)) {
    console.log("Maximum value = " + n2);
} 
else if ((n3>n1)&&(n3>n2)&&(n3>n4)&&(n3>n5)) {
    console.log("Maximum value = " + n3);
} 
else if ((n4>n1)&&(n4>n2)&&(n4>n3)&&(n4>n5)) {
    console.log("Maximum value = " + n4);
} 
else {
    console.log("Maximum value = " + n5);
}
if ((n1<n2)&&(n1<n3)&&(n1<n4)&&(n1<n5)) {
    console.log("Minimum value = " + n1);
} 
else if ((n2<n1)&&(n2<n3)&&(n2<n4)&&(n2<n5)) {
    console.log("Minimum value = " + n2);
} 
else if ((n3<n1)&&(n3<n2)&&(n3<n4)&&(n3<n5)) {
    console.log("Minimum value = " + n3);
} 
else if ((n4<n1)&&(n4<n2)&&(n4<n3)&&(n4<n5)) {
    console.log("Minimum value = " + n4);
}
else {
        console.log("Minimum value = " + n5);
    }