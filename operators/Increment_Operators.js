
// ===> Post Increment Operator

// let num = 10;
// num++;
// console.log(num);/

// increment using variables 

// 1. substitute
// 2. operations
// 3. increment

// let num = 20;
// let num1 = num++; // increment operator works only operator used variable // Endha operator ku ++ podurom oh adhan increment agum 
// console.log(num, num1 );
             // 21    20  
// Multiple increment 

let num = 20;// after first increment [21], second increment [22]
let num1 = num++ + num++;
//num1 = 20(Substitue) , num++(increment)[21] + num++ = num1(substitue)[21], num++(increment)[22]
// num1 = 20 + 21 = 41
console.log(num,num1);

// Pre Increment Operator


// Work flow :

// 1. Substitue with increment
// 2.operations

// let prenum = 20;
// let preNum2 = ++prenum;
// console.log(prenum,preNum2);

// Multiple Pre Increment

let preNum = 20;
let preNum1 = ++preNum + ++preNum;
console.log(preNum, preNum1);

// pre & Post Decrement 

let decnum = 20;// 18
let decnum1= decnum-- + --decnum;
// 20 + 18 = 38 , decnum = 18 
console.log(decnum, decnum1);

