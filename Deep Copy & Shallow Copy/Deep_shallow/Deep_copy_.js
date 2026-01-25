// // Deep copy - Deep copy idhula reference ah pass panama inoru copy edukanum at the same thing original affect aga kodathu 


let a = 10;

let b = a;

console.log(a,b); // 10 10


// a = 20;

// console.log(a,b); // 20 10

// // Epdina idhu stack la store agum (Call by value ) , individual address irukum each values kum 

 
// // ---------------------------------------------------------------------

// // Object 

// // let emp = {
// //     name : "Rishi",
// //     age : 20
// // }

// // let dup_emp = emp;

// // console.log(emp,dup_emp); // { name: 'Rishi', age: 20 } { name: 'Rishi', age: 20 }

// // dup_emp.name = "Poosha";

// // console.log(emp,dup_emp); // { name: 'Poosha', age: 20 } { name: 'Poosha', age: 20 }

// // both value kum affect agum so idhukaga dhan spread operator kondu vandhanga 

// // ...  operator seperate copy eduthu vachukum 

// let emp1 = {
//     name : "Rishi",
//     age : 20
// }

// let dup_emp1 = {...emp1};

// dup_emp1.name = "Pooshaaaa";

// console.log(emp1,dup_emp1); // { name: 'Rishi', age: 20 } { name: 'Pooshaaaa', age: 20 }

// Original affect agathu idhu dhan deep copy !! 


// Array 


// let a = [10,2,3,4,[2,3,4]];
// //        0 1 2 3 4[0 1 2] 

// let b = [...a];

// a[0] = 1;

// console.log(a,b) ; // Original affect agadhu en ah namma spread operator use pandrom 

// // [ 1, 2, 3, 4, [ 2, 3, 4 ] ] [ 10, 2, 3, 4, [ 2, 3, 4 ] ]


// // now check in nested array 

// a[4][0] = "Four OF";

// console.log(a,b);

//[ 1, 2, 3, 4, [ 'Four OF', 3, 4 ] ] [ 10, 2, 3, 4, [ 'Four OF', 3, 4 ] ]

//Original affect agudhu 