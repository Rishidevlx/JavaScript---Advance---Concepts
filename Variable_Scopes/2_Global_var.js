var Val_1 = " I am Var , I am working in Global ";
let Val_2 = " I am Let, I am not working in global";
const Val_3 = "I am const, I am also not working in Global ";

console.log(window.Val_1); // it works thats why it calls Global Scope.
console.log(window.Val_2); // In Browser we get Undefined becoz... UI consider it at a object.
console.log(window.Val_3); // In Browser we get Undefined becoz... UI consider it at a object.
// Window - It means runs that in Browser , It is a Object.