let dy_img = document.querySelector("img");
let content = document.querySelector("p");

dy_img.addEventListener("mouseover", function(){
    dy_img.src = "cat shock.png";
    content.innerText = " Suddenly Realised....!! one Thinggggggggggggggggg!! "
})

dy_img.addEventListener("mouseout", function(){
    dy_img.src = "cat cry.png";
    content.innerText = " Tomorrow is my...... Semester Exam !!!!!!!!!  "
})