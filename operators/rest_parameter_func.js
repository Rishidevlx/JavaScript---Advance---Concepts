// spread operator ah dhan function la use pandra apom rest operator | rest parameter nu soluvanga 

//... 3 dot ku ena artham na irukurah elathaium eduthuko apdinu artham !! 



function roll_No(a){ // multiple values vandhalum oru variable irukurah nala oru value dhan edukum (first val)
    console.log(a); // 238
}
roll_No(238,239,240,241,242); 

// But namma ... rest parameter use pana all values vum eduthu oru array kula potrum 






// function roll_No2(a,b,...all){ // ... micham ulla all values ah vum eduthu array la potrum 
//     console.log(a,b,all); // 238 239 [ 240, 241, 242 ]
//     //                        a   b        all
// }

// roll_No2(238,239,240,241,242);

// Epomaey namma function ku rest operator | Rest parameter use panum bothu adhan last ah irukanu check panikanum !! 
// because adhu ella values ah vum eduthum !! aprm epdi adhuku aduthu ulla variable ku value varum so error dhan throw pannum 






// function roll_No2(a,b,...all,c){ //SyntaxError: Rest parameter must be last formal parameter
//     console.log(a,b,all,c);
// }
// roll_No2(238,239,240,241,242);

// so that rest parameter epaium last ah dhan irukanum 