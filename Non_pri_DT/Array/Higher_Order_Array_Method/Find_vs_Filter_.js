// Find() - idhvum map mari array oda ovaru element ah iterate pannum , and orey oru single value ah return pannum
// Filter() - idhvum map mari array oda ovaru element ah iterate pannum , and  multiple values ah return pannum\

//Rendulaium chaining method possible dhan 


let Emp = [
    {name:"Rishi",Salary : 120000},
    {name : "Poos", Salary : 150000},
    {name : "Riha", Salary : 90000}
];

let Find_data = Emp.find(cElement => cElement.Salary>100000);// Find(CurrentElement, Index, Total_Array) idhuvum map function mari dhan 3 parameter kudukalam.
console.log(Find_data); // { name: 'Rishi', Salary: 120000 }

// find() -Ena panum na find pandrapa condition ku true ah irukura oru value vandha odaney andha value ah return panitu terminate agidum
 

let Filter_data = Emp.filter((cElement)=>{ return cElement.Salary > 100000; // Filter(CurrentElement, Index, Total_Array) idhuvum map function mari dhan 3 parameter kudukalam.
});
console.log(Filter_data);  // [ { name: 'Rishi', Salary: 120000 }, { name: 'Poos', Salary: 150000 } ] 

// Filter method all data vum iterate agitu true ah irukuratha new array la store panitu dhan terminate agum 




