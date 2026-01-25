// 1 . Promise vandhu oru asnyc object , So hold pani dhan execute agum 

// 2.await promise ah oru synchronize ah act pana vaikum

// Await use pandrathu nala ena agum na promise vandha aprm reject or resolve irukanu check pannum , illaina no problem 
// Suppose irundha andha resolve or reject oda value ah retun panitu dhan next line ku pogum 

// let Instagram = new Promise((Fullfill,failed)=>{
//     let pfp_data = true;

//     if(pfp_data){
//         Fullfill("Pfp Data Recevied ")
//     }
//     else{
//         failed("Sorry for inconveniance")
//     }
// })


// Instagram.then((Check)=>{
//     console.log(Check);
// })
// let check_message = await Instagram;

// console.log(check_message);

// console.log("awit Worked");

//Output without await 

// awit Worked
// Pfp Data Recevied 

// With await 

// Pfp Data Recevied 
// awit Worked

// await normal ah oru var la store pana only success or failed onnu dha varum so adhukaga dhan try , catch use pandrom /

// --------------------------------------------------------------------------------------------------------


// Now try catch use panalam 

let Instagram = new Promise((Fullfill,failed)=>{
    let pfp_data = true;

    if(pfp_data){
        Fullfill("Pfp Data Recevied ")
    }
    else{
        // failed("Sorry for inconveniance");
        throw new Error("Detected Error Check this line"); // Throw keyword new object error ah use pani reject ah use panama
        // oru error ah throw panaalam catch ku 
        
    }
})

// try , catch use pandrathuku namma endha var ah use pani return pandratha store pananum nu avasriyam illai like then mathiri 


// try{
//     let check = await Instagram
//     console.log(check);
// } // try matum potadhum namaku error throw pannum en ah try use paana compulsary catch use pananum 

// catch(Error){
//     console.log(Error);
// }

// finally{
//     console.log("Searching data done");
// }

// console.log("checking await working or not");

//output : 

// Pfp Data Recevied 
// Searching data done
// checking await working or not

//----------------------------------------------------------------

// same with function and using async keyword

async function Error_Handling(){ // async - keyword oru function ah sync la irundhu async ah change pannum 

    try{
       let check = await Instagram // await la error varum en ah idhu only async la dhan work agum 
       let nextcheck = await Instagram // Same try block kula lots of promise ah check panikalam 

       // async na hold pani vara functions so namma normal function ah async ah change pananum 
       console.log(check);
       console.log(`Next check ${nextcheck}`); // Next check Pfp Data Recevied 


   } // try matum potadhum namaku error throw pannum en ah try use paana compulsary catch use pananum 
   
   catch(Error){
    //    console.log(Error); // error.message use panala ipdi ena error nu show agum 
//        checking await and async working or not 
//     Error: Detected Error Check this line
//     at d:\Rishi's Data\Learning Days\Advance_Js\Sync_&_Async\Async_Await.js:54:15
//     at new Promise (<anonymous>)
//     at Object.<anonymous> (d:\Rishi's Data\Learning Days\Advance_Js\Sync_&_Async\Async_Await.js:46:17)
//     at Module._compile (node:internal/modules/cjs/loader:1706:14)
//     at Object..js (node:internal/modules/cjs/loader:1839:10)
//     at Module.load (node:internal/modules/cjs/loader:1441:32)
//     at Function._load (node:internal/modules/cjs/loader:1263:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
// Searching data done
       console.log(Error.message); // Error.message use pandrathu nala indha mari nama kudutha error ah matum show panikalam 

// Checking await and async working or not 
// Detected Error Check this line
// Searching data done
   }
   
   finally{
       console.log("Searching data done");
   }
}
Error_Handling(); // function kula vahcuurka nala call pana dhan execute agum 

console.log("Checking await and async working or not ");

//output : 

// Checking await and async working or not 
// Pfp Data Recevied 
// Searching data done



// Overall async na hold pani run panum 
//Sync na straight ah run panum other main blocks of code ah disturb panathu 
// Promise oda then(), Catch() use pana neriya if else use panuvom tough ah irukum , 
// try, catch use pani single block la neriya promise ah retrive panikalam !! 