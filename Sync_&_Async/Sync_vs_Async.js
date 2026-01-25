// Synchronous - Order ah line by line ah varadhu dhan Synchronous

// function f1(){
//     console.log("First");
// }

// function f2(){
//     console.log("Second");
// }

// function f3(){
//     console.log("Third");
// }

// f1(); // First
// f2(); // Second
// f3();// Third

//----------------------------------------------------------------------------

// Asynchronous


function f1(){
    console.log("First");
}

function f2(){
    console.log("Second");
}

function f3(){
    console.log("Third");
}

f1();
setTimeout(f2,2000); // SetTimeout la 2 parameter kudukalam , callback func & Timer 
// setTimeout(()=>{console.log("Second")},2000); // - SetTimeout na idhu oru browser method (WEBAPIs) 

f3();

// Output order : 

//First
//Third 
// After 2 sec Second

