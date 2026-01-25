// // fetch("https://fakestoreapi.com/users") // Fetch() oru promise ah dhan return pannum , namma API ah " " kulla dhan kudukanum 
// // fetch("") // // Failed to parse URL from  
// fetch("https://fakestoreapi.com/users/") // Fake End Point 
// // idhunla API correct ah irundha browser kula poi end point thapa irundha adhu oru error kudukum 
// // So browser kudukurah error dhan print agum 

// .then((Response_Data)=>{

//     // console.log(Response_Data); // Data Recevied in JSON Format
//     // console.log(Response_Data.json()); // Indha json method use pandrapa namaku JSON format normal method format ku change agum 
//     // Promise { <pending> } - En idhu pending ah iruku na promise idhu JSON ah normal ah change pani vachuruku but return panala
//     // adha inoru then() vachu dhan use pananum , so indha json format another then() ku return pananum 
//     // console.log(Response_Data.ok); // namma pass pana arguments .ok use paana idhu data vandha true kudukum ilana false kudukum 
   
//     if(!Response_Data.ok){
//         throw new Error("Data Not Found"); // throw method use pani next then ku pogama direct ah catch ku anupiten 
//     }
//     else{

//         return Response_Data.json(); // idhu oru Promise ah dhan return panum but in Normal format 
//     }
// })
// // Chaining method use pandrom 
// .then((Response_JSON_DATA)=>{
//     console.log(Response_JSON_DATA); // Output normal format la receive agum 
// })

// .catch((Thavaru)=>{
//     console.log(Thavaru.message); // Failed to parse URL from / Data Not Found
// })


// ================================================================================================


// same thing ah epdi async and await ah use pani panalam pakalam 

async function fetch_data(){
    try{
        let API = await fetch("https://fakestoreapi.com/users/abced"); // idhu oru promise ah return pannum , idha synchro ah change pandrom using await
                                                                 // En ah data first vandha dhan andha website paka attractive ah irukum     
    if(!API.ok){
        throw new Error("Data Not Found.. Olunga kudu da podalanga"); 
    }
    let data =  await API.json(); // inga andha JSON data va normal ah change pana time agum , so that await kuduthurukom 

    // without await - Promise { <pending> }
    console.log(data);
    }

    catch(error){
        console.log(error.message);
    }
}

fetch_data(); // function ah call pana dhan run agum 


// Fetch() - rendu argu accept pannum onnu API innonnu Method


fetch("", {   method : "GET" }); 