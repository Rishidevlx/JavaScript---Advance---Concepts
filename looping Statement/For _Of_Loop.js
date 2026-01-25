// 1. Normal looping la namma proper ah initialiation, condition , Increment/ decrement kudukanum but inga apdi edhvumey theva illai 
// 2. Namma for kula andha object ah pota matum podhum adhvey starting , ending eduthukum 

// Syntax :

        // for(let iterator of Object){
        //     console.log(iterator);
        // }

// roll_No = [238,239,240,241];

// for(let Rn of roll_No){
//     console.log(Rn);
// }


// Now string ah vachu try panalam !! 

// let student = "Richiii";

// for(Rnam of student){
//     console.log(Rnam);
// }


// now generator func vachu try panalam 


// function* Students_Name(){
//     yield "Rishi";
//     yield "Poosha";
//     yield "Riha";
//     yield "Riha 2";
// }

// // generator functions ena pannum ? , Namma call pandrapa yeild la ulla ovaru value vum varum adhu return pannu adha oru variable la store pananum !! 

// let stnd_Names = Students_Name();

// for(let names of stnd_Names){
//     console.log(names);
// }
// for of use pani ovaru thadavaium automatic ah call pannum 


// now object la try panalam 

let obj = {
    id : 239
}

for(let obj_ID of obj){
    console.log(obj_ID);
}

// TypeError: obj is not iterable varum !! becoz for of ovaru value dhan vangi print pannum object na neriya values and variables irukum 

// Indha problem ah solve pana vandhavan dhan For in loop 