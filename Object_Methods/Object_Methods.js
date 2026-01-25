// Object.entries() - Object ah oru multi dimenstion array ah convert pannum 

let Emp = {
    Uname : "Rishi",
    Id : 1018,
};

// let Obj_arr = Object.entries(Emp);
// console.log(Obj_arr); // [ [ 'Uname', 'Rishi' ], [ 'Id', 1018 ] ]

// // Andha Multi arr la new ah oru value add pandren 

// // Obj_arr.push("Role"); // [ [ 'Uname', 'Rishi' ], [ 'Id', 1018 ], 'Role' ] add agum but Arr to obj ah convert pandrapa error varum 
// // Obj_arr.push(["Role"]);  // Literal ah dhan kudukanum , so that convert pandrapa error varadhu 
// Obj_arr.push(["Role","backEnd Dev"]); // Undefined varadhu 
// console.log(Obj_arr);

// --------------------------------------------------------------------------------------------

// Object.fromentries() - oru array ah object ah convert pannum 

// let Arr_Obj = Object.fromEntries(Obj_arr); // Multi Dimen Array ah pass pandren 
// console.log(Arr_Obj); // { Uname: 'Rishi', Id: 1018 }


 // Arr to Object output // { Uname: 'Rishi', Id: 1018, Role: 'backEnd Dev' }


 // --------------------------------------------------------------------


 // Object.key() ; - object oda keys ah matum array ah kudukum 

//  console.log(Object.keys(Emp)) // [ 'Uname', 'Id' ]

//  // Object.values() ; - object oda Values ah matum array ah kudukum 

//  console.log(Object.values(Emp)) // [ 'Rishi', 1018 ]

 //---------------------------------------------------------------------------------


// Object.freeze() - Object freeze la irundhu modify pana mudiyathu like oru freeze state mari 

Object.freeze(Emp);

// Emp.Role = "Backend Dev";
// Emp.Uname = "Poosha";

// console.log(Emp);

// IsFrozon() - andha object freeze la iruka ilaya nu return panum ( True / False)

console.log(Object.isFrozen(Emp)) ; // true/false