// Reference Error - Illa dha variable ah call pandrathu Reference Error !! 
// Type Error - functions ah variable ah oh , number ah string format laiyo call pandrathu Type error 
// syntax error - adhu oda structure ah thappa kudukurathu dhan syntax error 


// Normal Function 
sample();

function sample(){
    console.log("hello..!! I am Normal functions I am posibile for Hoisting")
}

// Anonoymous Functions 

// sample1(); // Reference Error 
// let sample1 = function Sample_func(){
//     console.log("hello !! , I am anonoymous functions ");
// }
// sample1();
// En ah nama normal ah let , const ah vachu call pannum podhu adhu ananoymous functions ah vum variable vachu dhan call pandrom 
// so let variable vachu call pana adhu temporal dead zone ku poidum 

// var


// sample1(); // type error , because namma oru variable ah functions ah call pandrom nu type error varudhu 

// For example 


// console.log(sample1); // undefined 


// var  sample1 = function Sample_func(){
//     console.log("hello !! , I am anonoymous functions ");
// }
// sample1();


// // Arrow functions 
// sample2();// Reference error 

// let sample2 = function_name => console.log("I am Arrow Functions")
// sample2();