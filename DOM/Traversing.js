
function parent(){

    let getparent = document.querySelector(".child1");
    
    console.log(getparent.parentElement); // <div class="parent">…</div> // Idhu andha tags ah kuudukum
    console.log(getparent.parentNode); //<div class="parent">…</div> // idhu ulla ulla all text root , ellamey kudukum
    
    let gethtml = document.querySelector("html");
    console.log(gethtml.parentElement); // null
    console.log(gethtml.parentNode); // document
}

// Node --> Element node , Text node , Attribute node , Document(Root) node 

function child(){
    
    let child = document.querySelector(".parent"); 

    console.log(child.childElementCount); // andha parent kulla evlo child irukunu count pannum 
    console.log(child.children); // All child tag vum varum 
    console.log(child.firstChild); //  first child varum 
    console.log(child.lastChild); // Last child varum 

    console.log(child.childNodes); // Nodelist varum 
    console.log(child.firstElementChild); // First Element (tag) child varum 
    console.log(child.lastElementChild); //Last Element (tag) child varum 
    
}

// Siblings 

function Siblings(){
    let sib = document.querySelector(".child1");
    console.log(sib.nextSibling);
    console.log(sib.previousSibling);
    console.log(sib.nextElementSibling);
    console.log(sib.previousElementSibling);
    

}