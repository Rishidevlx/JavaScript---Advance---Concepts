// destructure na oru variable la multiple value irundha adha thani thaniya pirikirathu per dhan destructure 

//simple example 


// let num = [0,1,2,3,4,5,6];

// let Number1 = num[0]; // 0

// console.log(Number1); // 0 

// idhuku per dhan destructuring , but ipdi pandrapa oru array la 7 value iruku but na 7 line ku code pananum so complex 



// new destructure tech

// syntax : let [values of variables] = array or object 

// let num1 = [0,1,2,3,4,5,6,7,8,9,10];

// let [n0,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10] = num1;

// console.log(n10); // 10 

// console.log(n7); // 7

// console.log(n0,n1,n2,n3,n4,n5,n6,n7,n8,n9,n10) // 0 1 2 3 4 5 6 7 8 9 10

//destructure with rest operator

// let [n0, n1 , n2, ...all] = num1 ; 

// console.log(n0); // 0
// console.log(n1);// 1
// console.log(all);// [3,4,5,6,7,8,9,10]

// ... indha 3 dot variable epaiumey last ah dhan irukanum !! 


// try ur self 

let num = [1,2,3,4,[30,40,[400,500,600,[1000,1000]]],10,20,55,40];