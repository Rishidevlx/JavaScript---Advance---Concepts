// Spread na ena ?? edho onna spread pandrathu!! like namma vasal tholichu vidurah mari water ah spread panuvom !! 

// Same here !! one or two array ilana object la ulla value ah new array or object la store pandrathu dhan spread operator
// Spread operator (...) 3 dots 




// let Morning_time = ["5.00 AM", "6.00 AM", "7.00 AM", "10.00 AM" ]; // morning vasal tholichu vidura time

// let Evening_time = ["4.00 PM","5.00 PM", "6.00 PM"]; // Evening vasal tholichu vidurah time

// let time = [...Morning_time,...Evening_time];

// console.log(time);

// output : 
            //    '5.00 AM', morning 
            //   '6.00 AM', morning 
            //   '7.00 AM', morning
            //   '10.00 AM', morning
            //    '4.00 PM', Evening
            //   '5.00 PM', evening 
            //   '6.00 PM' evening 

// rendu array la ulla elemets ah oru array la spread paniruken like addition mari !! 


// // Spread in Object 

// let Govt_lap = {
//     color : "Silver",
//     brand : "acer",
//     proccessor : "i3",
//     Goal : "TVk va thokadikanum nu "
// }

// let Govt_lap1 = {...Govt_lap, sender : "Stalin appa ", next_cm : "Thalapathy"}; 

// // inga ena panirukena !! already irukurah oru object la ulla keys and values ah inoru object ku spread pandren + new keys and values ah add paniruken !! 

// console.log(Govt_lap1);

// Output : 

//             {
//   color: 'Silver',
//   brand: 'acer',
//   proccessor: 'i3',
//   Goal: 'TVk va thokadikanum nu ',
//   sender: 'Stalin appa ',
//   next_cm: 'Thalapathy'
// }


// why spread operator ?? 


let outdoor_Games = ["cricket","football"];
let Indoor_Games =["Free fire","Carrom","pepolo"];

let games = outdoor_Games

console.log(games); // outdoor_games array elemet varum crt ah  !! 
let Allgames = [...outdoor_Games];

// [ 'cricket', 'football' ]
//      0           1       
// ipom na games ngura array oda 0 index ah change pana outdoor_games oda 0 index vum change agum , becoz namma reference ah kuduthurukom 

games[0] = "lock & key";

// console.log(games); // [ 'lock & key', 'football' ]
// console.log(outdoor_Games);//[ 'lock & key', 'football' ]


  // but spread operator use pana andha mari namaku change agadhu !! 

console.log(Allgames); // Store pana aprm change agathu change panalum 
console.log(games); // Change agum becoz its reference 
