// 1. Generator functiond na its like a for-loop mathiri
// 2. generator functions ku "function*" indha mari kudutha podhum generator agidum 
// 3. generator functions ku return ku bathila yeild use pannuvom 
// 4. yeild - rendu variables ah kuudukum (value , Done )
// 5. next() methoda ah vachu dhan yeild ah again run panuvanga , ethana yeild iruko athana next() dhan use pana mudium 
// 6. After all yeild generator functions automatic ah return ah generate pani true nu return pannidum  
// 7. yeild epom true agudho apom adhu automatic ah stop agidum 

// Example

// function* generate(){
//     yield "I am Value 1 " ;
//     yield "I am Value 2 " ;
//     yield "I am Value 3 " ;
//     // automatic ah return generate agidum 
    
// }
// let Output = generate();

// console.log(Output.next()); // { value: 'I am Value 1 ', done: false }
// console.log(Output.next().value); // I am Value 2
// console.log(Output.next().done); //  false 
// console.log(Output.next()); // { value: undefined, done: true } // becoz generator functions yeild end achuna automatic ah return generate pannu 


// With manual Return 

function* generate(){
    yield "I am Value 1 " ;
    yield "I am Value 2 " ;
    yield "I am Value 3 " ;
    return "Last value ";
    
}
let Output = generate();

console.log(Output.next()); // { value: 'I am Value 1 ', done: false }
console.log(Output.next().value); // I am Value 2
console.log(Output.next().done); //  false 
console.log(Output.next()); // { value: Last Value, done: true } // becoz generator functions yeild end achuna automatic ah return generate pannu