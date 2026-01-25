// try ur self 

let num = [1,2,3,4,[30,40,[400,500,600,[1000,1000]]],10,20,55,40]

let [a,b,c,d,[a1,b1,[a2,b2,c2,[a3,b3]]],...rest] = num;

console.log(num) // [ 1, 2, 3, 4, [ 30, 40, [ 400, 500, 600, [Array] ] ], 10, 20, 55, 40 ] // Array ah short ah katudhu becoz neriya array irukurah nala 
console.log(a, b, c, d); // 1 2 3 4
console.log(a1, b1); // 30 40
console.log(a2, b2, c2); // 400 500 600
console.log(a3, b3);// 1000 1000
console.log(rest);// [ 10, 20, 55, 40 ]