// 1. Sort()
// 2. reverse()
// 3. include()
// 4. Tostring()
// 5. join()


// sort(); // indha sort method oru array la ulla elemnts ah lower to higher ah sort pannum !! 

// let arr_1 = [4,6,1,8,2,4,5];
// console.log(arr_1.sort()); // idhu original array ah affect pannum !! 

// Now try it in 2 digit 

// let arr_2 = [10,5,20,101,3,7];
// // Sort based on ASSCI values 
// console.log(arr_2.sort()); // [ 10, 101, 20, 3, 5, 7 ]

//----------------------------------------------------

// Reverse the array element


// let arr = [10,21,1,5,4,22]; // original arr ah affect panum !! 
// console.log(arr.reverse()); // [ 22, 4, 5, 1, 21, 10 ]

// -----------------------------------------



// includes - oru array la namma kudutha value iruka ilaya nu check pani solum !! value irundha true ilana false 

// let arrr = [10,20,30,40,22];
// console.log(arrr.includes(22)); //true
// console.log(arrr.includes(50)); //false
// //-------------------------------

let arrrr = [10,20,30,40];

let str = "10,20,30,40";

console.log(arrrr, "Array"); // [ 10, 20, 30, 40 ]
console.log(str, "Normal String"); // 10,20,30,40

//toString() ah use pani oru array ah string ah convert panalam 

console.log(arrrr.toString()," toString()"); // 10,20,30,40

// join();
// idhuvum array ah string ah change pani kuudukum 
// join method vum array mari dhan but idhula namma seperator ah change panikalam 


let arr_JN = [1,2,3,4,5];

console.log(arr_JN, " Normal array"); // [ 1, 2, 3, 4, 5 ]  Normal array
console.log(arr_JN.join(), " Using Join()");  // 1,2,3,4,5
console.log(arr_JN.join("."), " With seperator"); // 1.2.3.4.5 , Seperator la namma ena nalum kuduthukalam !! 


console.log(arr_JN.join("L"), " With seperator");  // 1L2L3L4L5  With seperator