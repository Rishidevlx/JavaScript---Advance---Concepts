// Promise ngurathum oru object dhan , idhu edhuku use agum na... backend la irundhu data varapa konjam time edukum so adhu 
// vara main block of code ah affect panama run pandrathuku dhan indha promise use agum 


let Instagram = new Promise((resolve,reject)=>{ // Instagram variable ku promise object ah assign panikiten 

    let pfp_Data = true;
    if(pfp_Data){
        resolve("here is pfp data");// Resolve ah then() ah vachu handle pananum , idhula kudukurathu return pannum 
    }
    else{
        reject("Poor Network Connection"); // Reject ah catch() ah vachu handle pananum , idhula kudukurathu return pannum 
    }
})

// Call pandrapa namma chaining methods use panalam 

// Instagram.then(console.log).catch(console.log).finally(console.log("Finally Ruined")); // Finally data vandhalum run agum , varala nalum run agum.
// .then(console.log) - idhuvum oru func dhan resolve("") func kulla kudutha values ah then handle pannum like return mathiri 

// output: 

//Finally Ruined
//here is pfp data

// Now same then() catch() finally() ah oru callback func la kudukalam 


Instagram.then((Message)=>{   // resolve return pandratha call back func la ula message arguments la receive panikichu 
    console.log("Success :",Message);
    return "Next Success : " + Message;
})
.then((Nextsuccess)=>{
    console.log(Nextsuccess);
}) 
                                        // normal func la nested func ah write panama just ipdi simple ah .then() method use panikalam 
//output :
//success : here is pfp data
// Next Success : here is pfp data
// Executed success
.catch((Error_msg)=>{
    console.log("Error :",Error_msg);
})
.finally(()=>{
    console.log("Executed success");
})

//output :
//  Success : here is pfp data
//  Executed success

// indha mari then, catch vachu dhan namma backend data va frontend ku show panuvom !! 


//-----------------------------------------------------------------------------------


//Using with callback func

// function pfp_data(Successcallback,Errorcallback){
//     let pfp = true;
//     if(pfp){
//         Successcallback("Profile found");
//     }
//     else{
//         Errorcallback("Profile Not found");
//     }
// }

// pfp_data(
//     (Success_msg)=>{
//         console.log("Success: ", Success_msg);

//         // idhuku kulla inoru call back func call pandren 

//     //     pfp_data(
//     //     (nextsuccess_msg)=>{
//     //         console.log("Username :",nextsuccess_msg);
//     //     },                                                       // Ipdi oru callback func kula inoru callback func 
//                                                                 // irukurathu dhan callback hell nu soluvanga  
//     //     (nexterror_msg)=>{
//     //         console.log("Username :", nexterror_msg);
//     //     }
//     // )
//     },
//     (Error_msg)=>{
//         console.log("Error : ", Error_msg);
//     }
// )