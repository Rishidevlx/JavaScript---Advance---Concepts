// charAt - method la index ah kuduthom na andha index la ula string character ah return pannum 

let str = "Richi Developer";
console.log(str.charAt(4)); // i
console.log(str.charAt(str.length -1));

// CharCodeAt - method la index ah kuduthom na andha index la ula string character oda ACCSI value ah return panum 

// let str = "Apple"; 
// console.log(str.charCodeAt(0))// 65

// concat - Array mari dhan rendu string ah add pannum 

// let str1 = "Hello";
// let str_2 = "Poos_Kuttie";

// let Str3 = str1.concat(" ",str_2); // Hello Poos_Kuttie

// console.log(Str3); // Hello Poos_Kuttie


// includes - Andha string la namma kudutha character irundha true ilana false 


// let str = "Rishi";

// console.log(str.includes("a")); // false
// console.log(str.includes("r")); // false
// console.log(str.includes("R")); // true
// console.log(str.includes("R",1)); // false - ("Search Char", starting Search index) 


// indexOf() - namma kudutha value oda index ah solum , left to right search panum , element ilana -1 return panum 

// let str = "Rishi";
// console.log(str.indexOf("R")); //0
// console.log(str.indexOf("r")); // -1
// console.log(str.indexOf("R",1)); // -1


// lastIndexOf()- Nmma kudutha value oda index ah solum , right to left search panum , element ilana -1 return pannum 

// let str = "Rishi";


// console.log(str.lastIndexOf("R")); //0
// console.log(str.lastIndexOf("r")); // -1
// console.log(str.lastIndexOf("R",1)); // -1

// repeat() - Andha string ah ethana thadava repeat pananum nu solurathu dhan 

// let My_name = "My name is Rishi Aravintha ";
// console.log(My_name.repeat(4));  // My name is Rishi Aravintha My name is Rishi Aravintha My name is Rishi Aravintha My name is Rishi Aravintha 

// replace / replaceAll () - ("Search String", "Replace String")

// let My_name = "My name is Rishi Aravintha, call me Rishi ";
// console.log(My_name.replace("Rishi", "Poosha")); // My name is Poosha Aravintha, call me Rishi 
// console.log(My_name.replaceAll("Rishi", "Poosha")); // My name is Poosha Aravintha, call me Poosha 


// Slice()
    // let My_name = "My name is Rishi Aravintha ";
    // console.log(My_name.slice(3)); // name is Rishi Aravintha 
    // console.log(My_name.slice(3,6)); // (Start, End-1) - nam
    //  console.log(My_name.slice(-10,-1));//  Aravintha , (-1) minus la pota reverse la irundhu varum 


// Substring() - namma solurah index la irundhu sub substring pani kudukum 

// let My_name = "My name is Rishi Aravintha ";
// //index  = 27
//     console.log(My_name.substring(3));  // name is Rishi Aravintha
//     console.log(My_name.substring(-1)); // substring negative ah accept panadhu, negative nale zero dhan  - My name is Rishi Aravintha 
//     console.log(My_name.substring(30,3)); // starting perusa vum ending chirusa irundha idhu automatic ah swap agidum 
//     // name is Rishi Aravintha 

// Split() - Namma kudukurah spl symbol vachu split panum 

// let My_name = "My name is Rishi-Aravintha";
// console.log(My_name.split("")); //[  'M', 'y', ' ', 'n', 'a', 'm',....]
// console.log(My_name.split("-")); // [ 'My name is Rishi', 'Aravintha ' ]
// // Split( "Spl symbol", limit Split)

// console.log(My_name.split(" "));// [ 'My', 'name', 'is', 'Rishi-Aravintha']
// console.log(My_name.split(" ", 2));// [ 'My', 'name' ]

// Startswith() - idhu boolean ah return pannum , namma kudukurah char la start ana true ilana false

// let My_name = "My name is Rishi-Aravintha";
// console.log(My_name.startsWith("n")); // false
// // StartsWith("StartsWith",index of search(startswith 1))
// console.log(My_name.startsWith("n",4)); //false
// console.log(My_name.startsWith("n",3)); //true

// endswith() - idhvum boolean return pannum ,  edhula end agiduku nu check pannum 

// let My_name = "My name is Rishi-Aravintha";
// console.log(My_name.endsWith("a")) // true

// // endswith("ending char", index of search)
// console.log(My_name.endsWith("y",2)) // true // My

// console.log(My_name.endsWith("name",7)) // true // My name 


//toUpper() - ella character ah vum upper ah change panum 

// let My_name = "My name is Rishi-Aravintha";

// console.log(My_name.toUpperCase()); // MY NAME IS RISHI-ARAVINTHA

// toLower() - Lower case ku convert panum 

// let My_name = "My name is Rishi-Aravintha";

// console.log(My_name.toLowerCase()); // my name is rishi-aravintha

//trim() - string la left and right space ah remove pannum 

// let My_name = "   My name is Rishi-Aravintha   ";

// console.log(My_name); //   My name is Rishi-Aravintha   
// console.log(My_name.trim()); //My name is Rishi-Aravintha

// // trimStart() - left space matum remove panum 
// // trimEnd() - Right space matum remove pannum 

// console.log(My_name.trimStart()); //My name is Rishi-Aravintha 
// console.log(My_name.trimEnd()); //    My name is Rishi-Aravintha












