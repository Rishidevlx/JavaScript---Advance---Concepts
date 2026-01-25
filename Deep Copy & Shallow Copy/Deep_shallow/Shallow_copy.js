let emp = {
    name : "Rishi",
    Age : 20,
    Favor : {
        Sports : "Esports",
        Food : "Zam Zam Briryani"
    }
}

let dup_emp = {...emp};

console.log(dup_emp);

emp.name = "Pooshuuuu" ; 

console.log(dup_emp);
 
// obiviously Change agadhu en ah namma spread operator use panirukom 

emp.Favor.Food = "Thair Sadham";

console.log(dup_emp); // change agum en ah shallow copy na nested values ah reference ah pass pannum 

//   name: 'Rishi',
//   Age: 20,
//   Favor: { Sports: 'Esports', Food: 'Thair Sadham' }
// }