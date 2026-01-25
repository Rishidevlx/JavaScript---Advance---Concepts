let input_field = document.querySelector("input");

function addvalues(btn_val){
    input_field.value += btn_val; // input_field.value = input_field.value + btn_val 
}

function clearVal(){
    input_field.value = ""
}

function deleteval(){
    input_field.value = input_field.value.slice(0,input_field.value.length-1);
}
function evaluateVal(){
    input_field.value = eval(input_field.value);
}
