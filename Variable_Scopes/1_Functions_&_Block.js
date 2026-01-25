// Functions Scope 

function Func_scope(){
    var val_1 = true
    if(val_1){
        console.log("I am Functions Scope var")
    }
    console.log(val_1);
}
// console.log(val_1); // Referance Error 
Func_scope();

// Block Scope

// function Blocked_Scope(){
//     if(true){
//         let Val2 = "I am Block scope They call me Let";
//         const val3 = " I am Blocked scope they call me Const";
//         console.log(Val2);
//         console.log(val3);  // Inside of a block 
//     }
//     // console.log(Val2); // We get reference error !! it means , there is no value in this name in memory 
//     // console.log(val3);
// }
// Blocked_Scope();
