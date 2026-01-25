// 1. oru functions call kula inoru functions kudutha adhu dhan call back function 
// 2. Calling Functions dhan Higher Functions 

// function Higher(){
//     console.log("I am Higher Order Function");
// }
// function callback(){
//     console.log("I am a Call back Functions");
// }

// Higher(callback()); 



// function add(callback, a, b){
//     //   add(add2, 10,20)

//     console.log(a+b);
//     // callback(100,200);
// }

// // 1.Function oda arguments pass la call back functions ah oru variable mari dhan pass pananum !! 
// // 2. higher functions la call back functions ah call pana dhan call back functions work agum !!  

// function add2(num1,num2){
//     console.log(num1+num2);
// }
// add(add2,10,20);
// Functions call la na add2 nu oru variable ah functions name ah kuduthuruken adhu add(aruguments la callback la store agum).
// andha add functions kulla callback ah functions ah kuduthuruken !! so andha arguments callback la vandhu add2 ah trigger pannum.






// Clear example 
// CALLBACK - Oru function-a vera function-kku kudukurathu

function makeCoffee(name, afterMaking) {
    console.log(name + ' ku coffee podren...');
    afterMaking();  // Callback function-a call pannrom
}

function serveCoffee() {
    console.log('Coffee ready! Kudinga!');
}

// serveCoffee function-a callback-ah pass pannrom
makeCoffee('Poosha', serveCoffee);

