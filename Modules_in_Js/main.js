// Export Name method


// import { Employee } from "./login.mjs";
// import { Fresher } from "./signup.mjs";

// console.log(Employee);
// console.log(Fresher);

//{ Uname: 'Rishi', role: 'Developer' }
// { Uname: 'Poosha', Age: 20, Role: 'Developer', join_date: '10.01.27' }


// ========================================================================


// Export Default 

// import { Employee } from "./login.mjs";
// import Fresher from "./signup.mjs";

// import { Employee as Old_Man} from "./login.mjs";  // with name change 
// import New_Empolyee from "./signup.mjs"; // with name change 


// console.log(Employee);
// console.log(Fresher);

// console.log(Old_Man, "Named Export In Old"); // Named Export
// console.log(New_Empolyee, "Default Export");

//==========================================================

// ipom oru func ah epdi import pandrathu nu pakalam 

// Named Export 
import {Company as C_name ,Old_employe} from './login.mjs';
// Default export 

import fresherName from './signup.mjs'; // Ena name nalum kudukalam en ah oru export dhana irukum so that 

console.log(C_name); 
Old_employe(); // Export panalum func mari dhan call pananum 
fresherName();

// Skenetic
// { Uname: 'Rishi', role: 'Developer' }
// { Uname: 'Poosha', Age: 20, Role: 'Developer', join_date: '10.01.27' }
