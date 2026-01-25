
// Normal Functions or Uncurry function 


function add(a,b,c){
    console.log(a+b+c);
}

add(10,20,30);

// Curry Functions 

// 1. Curry functions la oru functions ku arguments ah thani thaniya pass panikalam !! 

// function add(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c);
//         }
//     }
// }
// add(10)(20)(30); // Chaining function call  // 60

// let val_1 = add(100);
// let val_2 = val_1(200);
// val_2(300); // 600 



// Explanation : 

// console.log(val_1);
// console.log(val_2);

