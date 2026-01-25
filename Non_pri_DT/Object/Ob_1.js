// let Dress = {
//     colour : "Blue",
//     Size : "M",
//     Dress_Type : function(){
//         console.log("Formal Dress");
//         // return "with pair shoes";
//     }
// }

// console.log(Dress); // { colour: 'Blue', Size: 'M', Dress_Type: [Function: Dress_Type] }

// console.log(Dress.colour); // Blue

// console.log(Dress.Dress_Type); // [Function: Dress_Type]
// console.log(Dress.Dress_Type()); // Formal Dress , undefined

// // anonymous functions la oru value ah return pannum !! so that return edhvum iladha nala undefined nu varudhu 
// console.log(Dress.Dress_Type()); // with return - Formal Dress , with pair shoes

 
// Key with string 


let User_profile = {
    First_Name : "Rishi",  // key acts as a variable , So space vita error varum 
    "Last Name" : "Aravintha S", // Key ah string ah kuduthom na space vita error varadhu 
    Age : 18,
    Role : " Developer ",
    "Company" : "Riha's",
    skills : [ "html", "CSS", "jsx", "py"]
}

console.log(User_profile.First_Name); // Rishi
console.log(User_profile["Last Name"]); // Aravintha S
console.log(User_profile["Age"]); // 18 
console.log(User_profile.skills[0]); // html