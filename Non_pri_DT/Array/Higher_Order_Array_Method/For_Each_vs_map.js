// Foreach() - idhuvum for loop mari dhan !! Array la ulla value ah onnu onnu ah eduthu iterate agum 
// 1. Foreach method ah use pananum na oru functions namaku theva !! 
//2. Andha functions ku limit 3 parameter pass panikalam !! 
// 3. function(Current Element , Index of element, Total Array) 
// Current Element - "Apple" , Index of element - [0]= "Apple", Total Array - ["Apple","Banana","Cucumber","Dates","Mango"];

// Short ah solanum na array la ulla value ah onnu onnu ah eduthu functions ku anupum idhan foreach.

// let fruits = ["Apple","Banana","Cucumber","Dates","Mango"];

// fruits.forEach(PrintFruits); // function oda name ah parameter ah kuduken 

// function PrintFruits(celement,index,Total_Array){
//     console.log(celement);
// }

//---------------------------------------------------------------------------------------



// Map() - idhuvum same foreach mari dhan but idhu oru new array ah run agum podhey create pannum !! and also values ah retun pannum 

//  fruits.map(function(celement,index,Total_Array){ // function name ah kudukama oru function ah create pandren ! 
//     console.log(celement,index,Total_Array); // Apple 0 [ 'Apple', 'Banana', 'Cucumber', 'Dates', 'Mango' ]
// })

//--------------------------------------------------------------------------------------------


// now both forEach & map ah vachu values ah retrun pani papom !! 

// forEach
// let newarr = fruits.forEach((celement)=>{ // Inga oru arrow function create paniruken 
//     return celement;
// })

// console.log(newarr); // undefined. 

// En ah Foreach method ethaium return panathu !! namma for each la elements ah add panikalam ilana update pani use panikalam 

// let newarr_1 = fruits.map((celement)=>{
//     return celement;
// })

// console.log(newarr_1);

// idhu dhan forEach kum map kum ulla difference , forEach return panathu , Map return pannum.

//---------------------------------------------------------------------------------------------

//Advance map 

// let Emp = ["Rishi","Poosha","Akash","Riha"];

// let newarr_2 = Emp.map((celement,index)=>{
//     // return {id:index,name:celement}; // id:index ( ovaru element varum bothum adhu oda index id ah varum) , but id starts from 1 dhana so , index +1
//     return {id:index+1,name:celement};
// })

// console.log(newarr_2);

//----------------------------------------------------------------------------------------------


// For each value modify 

// let Emp1 = ["Akash","Muthu Rasu"];

// let Mod_arr = Emp1.forEach((celement)=>{
//     console.log(celement.toUpperCase());  // ipdi namma andha array values ah update pani forEach la use panikalam 
// })


// -----------------------------------------------------------------------------------------------

//Chain method 

// Already curry la chain function call pathurupom same idhu mari dhan 

// let Month = ["Jan","Feb","Mar","Aprl","May"];

// let bday = Month.map( celemnt => celemnt.toUpperCase()).sort().fill("Jan",3,5); // Single line la multiple method ah apply pandrathu dhan chaining method

// console.log(bday); // [ 'APRL', 'FEB', 'JAN', 'Jan', 'Jan' ]

// Chain method in forEach

// let bday_1 = Month.forEach(celemnt => celemnt.toLowerCase()).sort().fill("123");

// console.log(bday_1); // TypeError: Cannot read properties of undefined (reading 'sort')


// Because foreach endha value ah vum return panadhu , Js la oru element ah retun panalana default ah adhu undefined la irukum 
// So , oru undefinied ah array method ana sort(), fill() pana sona panadhu adhunala dhan type ERROR 




// Map & forEach with conditions 


let Month = ["Jan","Feb","Mar","Aprl","May"];

// let bday = Month.map((celement)=>{
//     return celement=="Jan";
// })

// console.log(bday); // [ true, false, false, false, false ]

// Map function ena return panudho!! adha apdiye new array ah store panikum 

//-------------------------------------------------------------


let bday_1 = Month.forEach((celement)=>{
    console.log( celement=="Jan");
})

// true
// false
// false
// false
// false


// ipdi dhan forEach() & map() ah use pananum !! 


