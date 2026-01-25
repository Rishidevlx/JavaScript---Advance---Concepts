// 1.indexof();
// 2.lastindexof();

// indexof() - indha method namma kudutha element andha array la irukanu check pannum irundha andha array element oda index ah return pannum 
// idhu vandhu left to right searching , First endha element iruko adhu oda index ah return pannum 

// lastindexof() - idhvum same indexof() dhan but idhu right to left search panum 

// irundhuchuna andha value oda index ah return panum ilana -1 ah return pannum 


let arr = [10,20,30,40,20,50];
console.log(arr.indexOf(20)); // idhula 20 array element oda index ah return pannum 
console.log(arr.indexOf(20,3)); // idhula search element ah kuduthuten + endha index la irundhu search pananum nu soliten 

let arr1 = [10,20,20,30,50,10]; // right to left search pannum 
console.log(arr1.lastIndexOf(20)); // 2 