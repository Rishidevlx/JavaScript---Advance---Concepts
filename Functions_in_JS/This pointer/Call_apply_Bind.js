// This na ena ?? This ngurathu oru pointer , idhu current object oda value ah point pannum 


let Emp = {
    Uname : "Rishi",
    Age : 20,
    intro : function (){
        console.log(this.Uname +" My age is " + this.Age) // This keyword current object oda value ah return pannum only in anynomous function
    }
}

Emp.intro(); // Rishi My age is 20


// Now same in Arrow func 

// let Uname = "poosha"; // undefined varum en na let oru Block scope variable 

// var Aname = "Poosha";
// var Aage = 20;


// let Emp1 = {
//     Uname : "Rishi",
//     Age : 20,
//     intro : ()=>{
//         console.log(this.Uname +" My age is " + this.Age); // This keyword current object oda value ah return pannum only in anynomous function
//     },
//     intro2 : () =>{
//         console.log(this.Aname + " And my age is " + this.Aage);  // idhu oru window output namma window la dhan output paka mudium use HTML file 
//     }
// }

// Emp1.intro(); // undefined My age is undefined , En ah arrow func la this keyword global object ah point pannum 
// Emp1.intro2();// undefined And my age is undefined , Window Output : Poosha And my age is 20



// ------------------------------------------------------------------------------------------------------------------------


//call() - indha method ah use pana namma ena object ah solurom ah andha object la ulla property oda valeu ah dha edukum 
// Call(Object name , Normal func params) - call method la 2 parameter pass panalam 


// let Emp3 = {
//     Uname : "Poosha",
//     Age : 20,
// }


// let Emp4 = {
//     Uname : "Rishi",
//     Age : 20,
//     intro : function (a,b){
//         console.log(this.Uname +" My age is " , a + b); // This keyword current object oda value ah return pannum only in anynomous function
//         return "Bind Return Done";
//     }

// }

// Emp4.intro.call(Emp3,10,10); // Poosha My age is 20

// Call method ah use pani other object oda values ah edukalam 
// Same name la keys same object la irundhalum namma call() la kudutha object oda value dhan return pannum 

// ------------------------------------------------------------

// apply() - idhuvum same call method mathiri dhan but idhu namma kudukurah value ah oru array ah kudukanum 

// Emp4.intro.apply(Emp3,15,10); // TypeError: CreateListFromArrayLike called on non-object

// Emp4.intro.apply(Emp3,[15,10]);  // Poosha My age is 20

// ----------------------------------------------------------------


// bind() - idhu vandhu oru function ah bound panum , bound na vangi matum vachukum , future la theva pata use panikaalam 

// let bind_val = Emp4.intro.bind(Emp3,5,5); //  return panum ngura nala oru variable la store panikiren 

// console.log(bind_val); // [Function: bound intro]


// idhu oru function ah vachuruka nala idhukum nama function mathiri dhan call pananum 

// console.log(bind_val()); // Poosha My age is  10
                         // undefined - en ah bind return panum but namma intro func la return use panika matom    

// Final output : 

// Poosha My age is  10
// Bind Return Done

// bind func ah execute panum same as return vum pananum 