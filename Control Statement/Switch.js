// let Trafficlight = "Over speed";

// switch(Trafficlight){
//     case "red" : console.log("Please stop ");
//     break;
//     case "Yellow": console.log("Ready to go ");
//     break;
//     case "green": console.log("Let Gooooo!! ");
//     break;
//     default : console.log("Pay a Fine");
// }

// Falls Through Switch Statement 

let Day = "saturday";

switch(Day){
    case "Monday": 
    case "Tuesday":   // Falls Through !!
    case "Wednesday": 
    case "Thursday":
    case "Friday":  console.log("Weekday , Go to school")
    break;
    case "saturday" : 
    case "Sunday" : console.log("Enjoy the Week End");
    break;
    default: console.log("Give me correct day")
}
