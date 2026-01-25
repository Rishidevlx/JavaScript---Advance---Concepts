// Reduce method na ena ? , Oru array la ulla elements ah oru element ah reduce pandrathu dhan reduce method 

// For eg : [10,20,30] = After reduce = [60] 

// Using reduce with For loop


let num = [1,2,3,4,5]; // 15

let Reduce_val = 0;

for(let i = 0; i<num.length; i++){
    Reduce_val = Reduce_val + num[i]; // reduce_val = 0 + num[i] "array[Index value]" , // 0+1;
}
console.log(Reduce_val);


// Reduce with reduce method ()


// let num = [1,2,3,4,5];

// let reduce_val = num.reduce((acc,celement,index,total_array)=>{ // reduce(2) 1. Callback func , 2. Accumalator
//     return celement+acc;
// },0);


// // Accumalator na namma normal function la create panom la oru variable ku 0 assign pannom la like that , andha value ku initizalion number solurathu 
// // call back func - 4 tharum , accumalator , current elemet , index , total array 
// console.log(reduce_val);

// let emp = [
//     {name:"Rishi" , Salary:40000},
//     {name: "Poosha", Salary:55000}
// ]

// let Reduce_salary = emp.reduce((acc, celement)=>{
//     return acc+celement.Salary;
// }, 0)

// console.log(Reduce_salary); // 40000+55000 = 95000

