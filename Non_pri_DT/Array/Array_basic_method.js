// Array oda basics methods na oru 5 iruku 
// 1. pop()  *
// 2. push() *
// 3. shift() *
// 4. unshift()* 
// 5. splice() 

// indha methods() elamey orignal array ah affect pannum !! 


let arr = [100,200,300,400,500,500];
//          0   1   2   3   4   5


arr.pop(); // remove the last element
console.log(arr);  // [ 100, 200, 300, 400, 500 ]

// arr.shift(); // Remove the first element of the array 
// console.log(arr); //[ 200, 300, 400, 500 ]

// arr.push(600); // add new element in the end
// console.log(arr); // [ 200, 300, 400, 500, 600 ]

// arr.unshift(100); // add new element in the begining of array 
// console.log(arr); // [ 100, 200, 300, 400, 500, 600 ]






// splice() array-la irukura elements-a add / remove / replace panna use aagum.

// syntax : arr.splice(startIndex, deleteCount, item1, item2, ...)




// startIndex → enga irundhu start aaganum
// deleteCount → ethana elements remove pannaum
// item1, item2... → (optional) new elements add panna





// arr.splice(2,2); // first 2 vandhu start index 2 (300) , second 2 vandhu delete count 2 (300,400)
// console.log(arr); // ena paniruku na start index la irundhu ethana index kudukom oh adhu vara delete pannum 


// arr.splice(2, 0, 250, 260,500); // index 2(300) la start aganum , 0 ( onum delete pana vendam ), 250 , 260 (extra va add panidu andha index ku aprm ) 
// console.log(arr); // [100,200,250,260,300,400,500,600]


// arr.splice(1, 2, 220, 230); // index 1 (200) la start agudhu , 2 value delete panudhu (200),(300) , adha delete panitu pudhusa andha index la (220),(230) vum add pandren , // replacements
// console.log(arr); // [ 100, 220, 230, 400, 500, 600 ]

