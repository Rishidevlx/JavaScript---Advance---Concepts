// 1. Concat()
// 2. slice()
// 3. Flat()
// 4.Fill()


// Concat : Concat apdina oru array ah vum inoru array ah vum add pana use panuvanga i mean merge

// array + array dhan pananum nu ila oru array ah inoru array la spread vum panalam , as well as new element vum add panikalam

// let arr = [10,20,30,40,50,60,70];
// let arr2 = [80,90,100]; 
// let arr3 = arr2.concat(110,120);
// console.log(arr3);// 


// console.log(arr.concat(arr2)); // [10,20,30,40,50,60,70,80,90.100]

// let arr3 = arr2.concat(110,120); 
// console.log(arr3);// [ 80, 90, 100, 110, 120 ]

//--------------------------------------------------------------------------
// slice 
// syntx : slice(start,end-1);

// starting postions la irundhu end -1 vara oru array ah slice pani kudukum !! like cut pani kudukum 


// let a = ["Rishi","Poos","Riha","Riha 2","riha 3"]
// // index:   0,     1,     2,     3,        4

// let a1 = a.slice(1,4);
// //               1,3


// console.log(a1); // [2,3,4,5]
// console.log(a);



//-------------------------------------
// Flat 
// idhu flat vandhu value ah return pannum i meant new array ah kudukum 
// Namma maths la pakurathu dhan flat 50% offer nu soluvanga la apdina round ah ivlo offer nu dhana artham adhey mari dhan same 
// flat() vandhu nested array ah flat pani single array ah kudukum 

// let arr = [1,2,3,4,[2,3]];
// let a1 = arr.flat(); // oru nested array ah irundha adha remove pani single array ah kudukum 
// console.log(a1);// [ 1, 2, 3, 4, 2, 3 ]

// let arr2 = [1,2,3,[4,5,[6,7,8]]];
// let a2 = arr2.flat(25); // indha 3 count ethana nested array ah remove pananum nu namma kudukanum !! 
// console.log(a2); // [1,2,3,4,5,6,7,8]

// // But all the time vum ethana nested array irukunu count pana mudiyathu la so adhukaga dhan 

// let arr3 = [1,2,[3,4,[5,6,[7,8,[9,10,[11,12,[13,14,[15]]]]]]]];

// let a3 = arr3.flat(Infinity); // Ethaana nested array irundhalum single a change pani kuduthurum

// console.log(a3); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//------------------------------------------------------


// Fill()idha use pani namma oru array la new element ah postion order la fill panalam 

let names = ["Rishi", "Poos","Riha","amutha","Nagammal"];
//              0       1       2       3       4
let myfamily = names.fill("Riha 1",0,2);
console.log(myfamily);

