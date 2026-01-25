// inititalization;
// while(condition){
// statement
//increment
//}

// we use while loop !! when we don't know thw starting and ending point 

// print 10 - 1 

// let val = 1;
// while(val <= 10 ){
//     // console.log(val)
//     console.log(val," " ,val,". Round" )
//     val++; // post increment // change  decrement for reverse  
// }

// adding all of numbers in a sequence 

// expected 1 + 2 + 3 + 4 = 10 

let num = 1234;
let sum = 0; 

// console.log(num%10); // 4 , 3, 2, 1
// console.log(num/10); // 123.4, 12.3, 1.2  
// console.log(parseInt(num/10)); // 123, 12, 1 // it is used to round of a float value 

while(num > 0  ){
    let last;
    last = num % 10; // 4 
    num = parseInt(num / 10); // 123.4
    sum = sum + last; 
}
console.log(sum);



