function AskSorry(){

    let listner = document.createElement("li");// oru new element ah create pandrom 
    console.log(listener); 

    // listner.innerText = "I am Sorry "; // oru text ah matum add pannum 
    // listner.innerHTML = " <a> here <a> I am Sorry "; // already irukurah element ah manipulate + oru new tag ah vum sethu add pana use panuvom 
    // listner.textContent = "<a> here <a> I am Sorry"; // text ah matum add panum 

    // Innertext & text content rendumey element ah add panadhu only text ah matum dhan add panum 
    //but InnerHtml elements ah vum add panum 
    // console.log(listner);
}

// // ====================================================
// function AskSorry(){
//     let listener = document.createElement("li");
//     let input = document.querySelector("input");
//     // console.log(input.value); // input field la ulla text ah console panikalam 

//     listener.innerText = input.value;// input field value ah listener create pandra tag la add agidum 

//     // console.log(listener); // input field oda value oda li> tag la varum
    
//     let add_sorry = document.querySelector("ol");
//     // add_sorry.append("I am so ", listener); // ui la andha tag kulla append agum 
//     // add_sorry.appendChild(listener); //only allows element not text node 

//     // Append() => text node ah allow panum but appendchild () , allow panathu it allows only element node 
    
    
//     // insertbefore ah use pani oru element ku punala pinala indexes ah cal pani use panikalam 
//     // Children use pani all parent tags ah select pani adhula[] use pani index ah select pandrom 
//     // add_sorry.insertBefore(listener,add_sorry.children[0]);

//     // replacechild ah vachu endha child ah text ah replace panikalam 
//     // add_sorry.replaceChild(listener, add_sorry.children[0]);

//     // particular child tag ah remove pandrom 
//     // add_sorry.removeChild(add_sorry.children[0]);

//     // add_sorry.remove(); // andha elements tag ah remove pannum 

//     // Dynamic Cascading 

// //     add_sorry.append(listener);

// //     listener.style.color = "blue";
// //     listener.style.backgroundColor = " white ";
// }

