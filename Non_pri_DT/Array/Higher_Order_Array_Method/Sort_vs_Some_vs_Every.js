// Sort() - idhula call back function ah use panni ASSCi value ah pakama numeric ah sort panum 
// Some() - idhula acts like la Logical OR (||) operator
// every() - Act as a Logical AND(&&) Operator



// Sort():

let Num = [5,2,100,30];

let Num_Sort = Num.sort((a,b)=>{return a-b}); // call back function la 2 parameter dhan limited 

console.log(Num_Sort); // [ 2, 5, 30, 100 ] 

// Backside of Sort(Callback()) :

// Asscending Order 
// a - b => Positive => Swapping
// a - b => Negative => No Swapping

// Desending Order 
// b - a => Postive => Swapping
// b - a => Negative = > No Swapping

// Asscending : 


// [5,2,100,30]
// a - b => 5 - 2 => postive - swap [2,5,100,30]
// a - b => 5 - 100 => negative - no swapp [2,5,100,30]
// a - b => 100 - 30 => postive - Swapp [2,5,30,100]



// Some() :

let Num1 = [1,2,3,4,5,6,7,8];
let Even_num = Num1.some((celement)=>{return celement % 2 == 0}) // limit 3 para , same as map (current val , index, array)

console.log(Even_num); // true , Because onnu true ah irundhalum podhum 



// Every()

let num2 = [1,2,3,4,5,6,7,8];
let Even_num2 = Num1.every((celement)=>{return celement % 2 == 0}) // limit 3 para , same as map (current val , index, array)

console.log(Even_num2); // false , onnu false nalum false 