function AreaofRec(l,b){
    return(l*b);
        console.log("below the Return"); // the line of code does not execute after function returned , it returns value
}
console.log(AreaofRec(100,50));
let Rectangle = AreaofRec(100,50);

// function cubic(c) {
//     return(c**3,true,10,"Last Value");// Return type returns only last value 
// }
// console.log(cubic(2)) // 2*2*2 =8


// Non Return Type 


// function Value(){
//   console.log("Retun only retuns the value");
//   return 10;
// }
// let New_Val = Value(); // Retun only retuns the value
// console.log(New_Val); // Undefined , Because it non return type , function value is empty so it retuns undefined. 
// console.log(New_Val);// After return it 10 , becuase it stores a value. 


