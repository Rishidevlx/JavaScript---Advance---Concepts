var a = 10;
let b = 20;
const c = 30;

function GlobalScope(){
    function Inner_Scope_1(){
        var a = 100; // 5 
        let b = 200;
        const c = 300;

        console.log(a+b+c);
        function Inner_Scope_2(){
            var a = 1000; // 4
            let b = 2000;
            const c = 3000;

            console.log(a+b+c);
        }
        Inner_Scope_2(); // 3 // Block Scope & Local Scope
    }
    Inner_Scope_1();// 2 // Block scope & Local scope
    console.log(a+b+c); // 1 // it is global scope
} 
GlobalScope();


// Engine first checks in local scope if that variable not found means it checks in global scope

// ippo nama Inner 2 ah matum call pana idhu local la value irukanu pakum irundha local value edukum ilana global value ah choose pannum.