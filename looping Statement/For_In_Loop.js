// For in loop oda main purpose ah object ah iterate pandrathu dhan for in oda use 

// Synatx :

            // for(key in Object){
            //     console.log(key);
            // }

let family = {
    Total_Members:4,
    marriageType : "Love Marriage",
    names : {
        Father : "Rishi Aravindha",
        Mother :"Poos kutttie",
        Daughter: "Riha",
        Daughter2 :"Riha 2"
    },
    age :[19,19,0,0],
    life(){ // object kula oru functions use pandrom na function key word theva illai 
        console.log("Living Happily with my dream family");
    }
}

// console.log(family.Total_Members); // 4




for(let key in family){
    // console.log(key); //Total_Members , marriageType , names , age , life

    // Normal key kudutha oru object la ulla key ah matum dhan adhu print pannum !! 
    // Array ku index kudukurah mari kudukanum 

    console.log(family[key]); // key ena pannum oru oru key ah edukum object la irundhu 
}

// output : 
// 4
// Love Marriage
// {
//   Father: 'Rishi Aravindha',
//   Mother: 'Poos kutttie',
//   Daughter: 'Riha',
//   Daughter2: 'Riha 2'
// }
// [ 19, 19, 0, 0 ]
// [Function: life]



//same idhulaium string and array panalam !! try panu !! 