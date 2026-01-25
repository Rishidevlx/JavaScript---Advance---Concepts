let User_name = " Rishi ";
let Age = "18";
let dynamic = "Dev_ID";  // dynamic properties 


let Developer = {
    User_name,    // Key - User_name : value - "Rishi" // idhuku per dhan short name access 
    Age, // key - Age : value - 18 
    ["dynamic"] : 1018,
    [dynamic] : 1810,
    num : "hello" // try 
}

console.log(Developer); // { User_name: ' Rishi ', Age: '18', dynamic: 1018, Dev_ID: 1810 }
console.log(Developer.Age); // 18 
console.log(Developer["dynamic"]); // 1018
console.log(Developer.dynamic); // 1018
console.log(Developer[dynamic]); // 1810
