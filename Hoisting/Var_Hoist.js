// 1. Hoisting na oru program run agum podhu adhu oda variable declarations matum top la assign agidum idhuku per dhan hoisting
// 2. 3 type of variable iruku !! idhula var matum dhan hoisting nadakum 
// 3. Let and Const rendumey Tempor Dead zone ku poidum !! 
// 4. Tempor dead zone na variable top la irukum but initialize paanama access pana mudiyathu 

// Var a ; ==> Declaration

console.log(a);

var a = 10;
console.log(a);

// let b; ==> Temporal Dead Zone ==> Can't access until value assign

// console.log(b);
// let b = 20;
// console.log(b);

// // Const c ; ==> Temporal Dead Zone ==> Can't access until value assign

// console.log(c);
// const c = 30;
// console.log(c);


