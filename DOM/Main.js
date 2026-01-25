// GetElementsByTagname

// h1 tag ah full ah eduthukuren 

//Plural

console.log(document); // All the line of code in the file 

var h1_data = document.getElementsByTagName("h1");

// console.log(h1_data);

// Array la varum en ah oru file la neriya h1 tags irukum ellathaium select pannum 

//GetElementByClassname

// Heading class name la ulla tags ellathaium select pandren 

// var Heading = document.getElementsByClassName("Heading");

// console.log(Heading); // same array because of plural 

// GetElement BY ID

// var ParaWithID = document.getElementById("P1");

// console.log(ParaWithID); // idhu array la varadhu en oru file la uniq ana id ah dhanna irukanum 


//GetElementBynames() - idhu oru input field la vara data oda name dhan idhu , andha data va manipulate pana use panuvom 

// var input_field = document.getElementsByName("User_name_Data");

// console.log(input_field); // idhu oru nodelist ah kudukum 



//==================================================================>

    // idhu ellathaium namma QuerySelector , QuerySelectorAll ah use pani pana mudium 

// QuerySelector() - idhu la namma class , id , name , tagname vachu select panalam but single element dhan select agum 

// var Query_heading1 = document.querySelector("h1"); // Tag name
// var Query_heading2 = document.querySelector(".Heading"); // Class name , css mari dhan call pananum 
// var Query_heading3 = document.querySelector("#P1"); // ID name , css mari dhan select pananum 

// console.log(Query_heading1);
// console.log(Query_heading2);
// console.log(Query_heading3);


// // QueryselectorAll all elements ah vum select pannum but in nodelist , nodelist na onum ila web la object element ah node nu soluvanga 

// var QueryAll_1 = document.querySelectorAll("h1");
// var QueryAll_2 = document.querySelectorAll(".Heading");
// var QueryAll_3 = document.querySelectorAll("#P1");

// console.log(QueryAll_1);
// console.log(QueryAll_2);
// console.log(QueryAll_3); // ID vum Nodelist la dhan varum because Html ,css la Same ID ah multiple tags ku support pannum 



//=======================================> 


    // SMALL MANIPULATION 

// var WelcomeMessage = document.createElement("h1"); // CreateElement() ah use pani new ah oru element create pannen 

// WelcomeMessage.innerText = "Ellarum Vanga Always Welcome's You <3 "; // .Innertext ah use panni andha create pana element ku text kuduthen

// document.body.append(WelcomeMessage); // Web la display agum ,

// // Document.body select pana entire page oda body aprm append() - method last ah andha element ah add pannum 

// console.log(WelcomeMessage); // <h1>Ellarum Vanga Always Welcome's You &lt;3 </h1>