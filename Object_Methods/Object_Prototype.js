// Object prototype na , every object kulaium oru build in predefined func irukum 
// Adhu mari namalum andha object kula oru user defined ah prototye ah create panikalam 
// Oru object ah create panitu andha object ah inoru object oda prototye ah kuduthukalam 


let arr = [10,2,"Three"];
console.log(arr);

// Simple ah solanum na predefined functions ah dhan prototype nu soluvanga 

// let Dev = {
//     Uname : "Rishi Aravintha",
//     Role : "Developer",
//     Age : 20
// }
// // Same array mathiri object kum some predefined functions lam irukum 

// console.log(Dev); // { Uname: 'Rishi Aravintha', Role: 'Developer', Age: 20 }

// // Object Create 

// // idhu use pani namma inheritance ah archive panalam same as new ah oru object ah prototye ah vachukalam 


// let Team_lead = Object.create(Dev); // inga Team_lead Object kulla Dev ah oru prototype ah kuduthuruken

// console.log(Team_lead); // {} 

// // Prototype ah epdi console pani pakanum na 2 ways iruku 

// // 1. __proto__ 

// console.log(Team_lead.__proto__); // { Uname: 'Rishi Aravintha', Role: 'Developer', Age: 20 }

// // idha use pani andha prototype ula values ah eduthukalam 

// // 2. Object.getPrototypeOf(Object name )

// console.log(Object.getPrototypeOf(Team_lead)); // { Uname: 'Rishi Aravintha', Role: 'Developer', Age: 20 }

// // New ah value ah object ku insert panalam 

// Team_lead.location = "Coimbatore";

// console.log(Team_lead); //  { location: 'Coimbatore' }

// // Team_lead object ah vachu dev prototye ah access  panalam idhula inhertiance ah archive panuvom 

// console.log(Team_lead.Age); // 20


//-------------------------------------------------------------------


// Object.assign - idhu rendu object ah merge pandrathuku use agum 

// let Company = {
//     Cname : "Skenetic",
//     id : 20,
// };

// Object.assign(Company,{location : "Srivi", OpenDate : "April 20"}); // assign(target, source)

// console.log(Company); // { Cname: 'Skenetic', id: 20, location: 'Srivi', OpenDate: 'April 20' }

// let C_details = Object.assign(Company,{location : "Srivi", OpenDate : "April 20"}); 

// console.log(C_details); // { Cname: 'Skenetic', id: 20, location: 'Srivi', OpenDate: 'April 20' }

// // Idhu original object ah vum affect panum 





