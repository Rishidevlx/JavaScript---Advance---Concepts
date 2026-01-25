// it executes first , then checks the conditions 
let num = 9
do{
    console.log(num);
    num++; // 10
}
while(num<=9); // num = 10 ==> false 
console.log("Current val : "+ num);

