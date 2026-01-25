// let emp = {
//     name : "Rishi",
//     Age : 20,
//     Favor : {
//         Sports : "Esports",
//         Food : "Zam Zam Briryani"
//     }
// }

// let dup_emp = {...emp};
// emp.Favor.Food = "Thair Sadham";

// console.log(dup_emp); // change agum en ah shallow copy na nested values ah reference ah pass pannum 

// //   name: 'Rishi',
// //   Age: 20,
// //   Favor: { Sports: 'Esports', Food: 'Thair Sadham' }
// // }

// ---- Advc Deep - Nested ah vum spread operator use panaa adhaium thani address la vachukum  

//syntax :

// {...main_object, nested object name {...(Spread).main_objectname.nestedobj}}


// let dup_emp = {...emp,Favor:{...emp.Favor}}; // indha mari spread aprm comma (,) potu new ah add panikalam same as modify vum panikalam 


// emp.Favor.Food = "Thair Sadham";

// console.log(dup_emp);

// ipom nested object ah vum affect paanathu but idhu object ku matum dhan work agum not for array 



//------------------------------------------------------------------------------------------------------------

// So , adhukaga dhan JSON methods() iruku

let emp1 = {
    name : "Rishi",
    Age : 20,
    Favor : {
        Sports : "Esports",
        Food : "Zam Zam Briryani"
    }
}

// let dup_emp1 = JSON.stringify(emp1); // Idhu ena panum na object la ulla each keys and values ah string ah convert pannum 

// console.log(dup_emp1); // {"name":"Rishi","Age":20,"Favor":{"Sports":"Esports","Food":"Zam Zam Briryani"}}

// let final_deepCopy = JSON.parse(dup_emp1); // inga JSON string format ah normal object ah convert pandrom 

// console.log(final_deepCopy);

// {
//   name: 'Rishi',
//   Age: 20,
//   Favor: { Sports: 'Esports', Food: 'Zam Zam Briryani' }
// }

// let short_deepcopy = JSON.parse(JSON.stringify(emp1)); // String ah mathitu normal ah mathanum nu solirukom , so that stringify ah parse kula kuduthurukom 


// emp1.Favor.Food = "Palaya Sorru ";

// console.log(emp1);
// console.log(short_deepcopy);

// { -- Original
//   name: 'Rishi',
//   Age: 20,
//   Favor: { Sports: 'Esports', Food: 'Palaya Sorru ' }
// }
// { -- Deep copy 
//   name: 'Rishi',
//   Age: 20,
//   Favor: { Sports: 'Esports', Food: 'Zam Zam Briryani' }
// }

// Object ku deep copy done 



//Now array ku Deep copy panalam 

let  a = [1,2,3,4,[2,3,4]];

let b = JSON.parse(JSON.stringify(a));

a[4][0] = "FOUR OF"

console.log(a);
console.log(b);