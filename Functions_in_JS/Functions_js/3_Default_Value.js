// We use default value to avoid missing data problem. 

function Login_Detls(Uname,Uage = 22){
    console.log(`Hello ${Uname} , your Current age is ${Uage}`);
}
Login_Detls("Rishi", 20);
Login_Detls("MuthuRasu", 21);
Login_Detls("Seenu");        // Hello Seenu , your Current age is 22( Default Value)

// Default values through functions call 

// function Login_Detls(Uname = "Seenu",Uage = 22){
//     console.log(`Hello ${Uname} , your Current age is ${Uage}`);
// }
// Login_Detls("Rishi", 20);
// Login_Detls("MuthuRasu", 21);
// Login_Detls(); // Seenu , 22 
// Login_Detls(undefined,18);
// Login_Detls("Akash",undefined);

// // Default values in variable 

// let User_ID = 239; // 239
// // let User_ID = undefined; // 101
// //let User_ID = true; // true , because it is also a value of boolean. 
// let New_User_ID = User_ID || 101; // use Logical operator (||) for deafult values.

// console.log(New_User_ID);


