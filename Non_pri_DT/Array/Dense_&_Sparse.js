let Dense = [ "one ","Two", " Three "]; // Contigus memory location 
//Base_Address 1004, 1008,   1012
// Sizde         4     4       4
// Formula = Base_Address (index * Size );
// now searching "two"

// 1004 (0*4) = 1004(0) = 1004 ; 

let Spares = [ "One ", , " Three ",  , " Five "]; // Hash Map or Hash Table 

// Output : [ 'One ', <1 empty item>, ' Three ', <1 empty item>, ' Five ' ]

// idhunala irukurathuku matum dhan memory alacate agum iladhadhu ku omit agidum !! 


console.log(Spares);