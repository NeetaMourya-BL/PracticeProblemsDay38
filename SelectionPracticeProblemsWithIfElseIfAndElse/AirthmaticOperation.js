/** airthmatric operation */
let a = 10;
let b = 20;
let c = 30;
let n1=a+b*c;
let n2=a%b+c;
let n3=c+a/b;
let n4=a*b+c;
console.log("n1=" +n1);
console.log("n2=" +n2);
console.log("n3=" +n3);
console.log("n4=" +n4);
if ((n1>n2)&&(n1>n3)){
    console.log("Maximum value = " + n1);
    }
    else if ((n2>n1)&&(n2>n3)) {
        console.log("Maximum value = " + n2);
    } 
    else {
        console.log("Maximum value = " + n3);
    }
    if ((n1<n2)&&(n1<n3)) {
        console.log("Minimum value = " + n1);
    } 
    else if ((n2<n1)&&(n2<n3)) {
        console.log("Minimum value = " + n2);
    } 
    else {
            console.log("Minimum value = " + n3);
        }