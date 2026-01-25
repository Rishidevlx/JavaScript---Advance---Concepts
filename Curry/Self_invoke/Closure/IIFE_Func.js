// 1. IIFE - immediate Invoked Functions Expression 
// 2. idhu dhan self invoke function nu soluvanga 
// 3. En ah normal function mari idha call panamalaiye execute agum 
// 4. Example : Ludo game ad banner 
// 5. Automatic ah first ae call agitu memory la irundhu remove agidum. 


// Normal functions 

function normal(){
    console.log(" Hello...!! I am normal functions")
}

normal();

//------------------


// Self Invoke Functions



// Whole functions vum covered by Parantheeses ()

// (function() {
//     console.log("Hey hello... , I am self invoke !! No one calls me ");
// })() // ==> End of Self invoke la () like normal func mari 



// // self invoke with arguments passing 

// (function(U_name) {
//     console.log(`hello...!!${U_name}, I am Self_Invoke function , no one calls me `);
// })("Rishi")

// Self invoke with named calling 

// (function IIFE_Pattern(U_name) {
//     console.log(`hello...!!${U_name}, I am Self_Invoke function , no one calls me `);
// })("Rishi") // hello...!! Rishi , I am Self_Invoke function , no one calls me

// IIFE_Pattern("Rishi"); // Reference Error 

// Explanation : becoz Self invoke once execute agitu memory la irundhu remove agidum !! 
