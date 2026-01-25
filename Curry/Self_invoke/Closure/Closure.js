// 1. closure na Outer scope la declare pana variables ah inner scope la use pannikalam 


function Outer_Scope(){
    var Str = " Naa Outer scope karen da "; // outer scope variable
    function Inner_scope(){
        console.log(Str); // inner scope use 
    }
    Inner_scope();
}

Outer_Scope(); // Naa Outer scope karen da 

