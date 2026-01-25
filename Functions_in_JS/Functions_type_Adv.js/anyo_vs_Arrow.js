// // Normal Functions 


// idhu normal functions dhan namaku therinjadhu !! no difference ! 




function Normal(){
    console.log(" Hello I am nomral Functions")
}
Normal();



// // anonymous function




// 1.anonymous functions na oru functions ah oru variable la store pandrathu dhan anonymous function nu soluvanga
// 2. Same normal function syntax dhan 
// 3. We call it by there variable name 


//1.

// let anonymous = function(){
//     console.log(" I am anonymous functions");
// }
// anonymous();


// 2.

// let anonymous2 = function(a,b){
//     console.log(a+b);
// }
// anonymous2(10,20);



// Advance concept Arrow Functions 



// 1. Arrow functions na the functions declare with => suymbol 
// 2. indha functions la functions ku name theva illai 
// 3. oru vela functions oda code line one line ah irundha {} theva ilai 
// 4. and also functions ku (parameters) oda () vum theva illa just parameter kudutha podhum 
// Eg : let variable = a => console.log(a);
// 5. Suppose return type ah irundha just return parameter matum podhum 
// Eg : let variable = a => a; 






// let Arrow = Arrowfunc => {
//     console.log("I am Arrow functions 1 ");
// }
// Arrow();

// let Arrow_2 = Arrowfunc2 => console.log(" I am Arrow func 2 , without {} ");
// Arrow_2();

// without any function() name 



// with parameter


// let Adv_Arrow = (a,b) => {
//     console.log(a+b);
// }
// Adv_Arrow(10,20);

// Simple line 


// let name_dis = (Name) => console.log(Name);
// name_dis("Rishi");

// with return type 

// let Adv_Arrow_2 = (a,b) => {
//     return(a+b);
// }
// console.log(Adv_Arrow_2(10,20));




// Retun type Arrow 

// let last_name = "Aravindha "; // assign last name 

// let User_lastName = (Uname) => { 
//     return Uname;
// }

// console.log(User_lastName(last_name));
// simple retun type 

// let last_name = "Aravindha ";
// let User_lastName = Uname => Uname;
// console.log(User_lastName(last_name));
