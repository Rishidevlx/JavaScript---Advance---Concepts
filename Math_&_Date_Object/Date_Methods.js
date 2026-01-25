// new Date() idha vandhu namma object , methods vum solalam 
let today = new Date()
// console.log(today);// 2026-01-13T20:03:53.369Z 

// getfullyear()
// console.log(today.getFullYear());// 2026 retuns only year 

//getMonth()

// console.log(today.getMonth());// 0  ==> it return by index , so Add 1 to get correct month 
// console.log(today.getMonth()+1 ); // 1 

// getDay()

// console.log(today.getDay()); // 3 // wednesday 

// getdate()

// console.log(today.getDate()); // 14

//gethours()

// console.log(today.getHours()); // 1 - current hour

//getminutes()

// console.log(today.getMinutes()); // 40 - current min

// getseconds()

// console.log(today.getSeconds()); // 52 - current seconds

//-----------------------------------------------------------------------------


//setfullyear(year,month,day)

// today.setFullYear(2022,0,11); // - set use pani namma date ah set pani vachukalam , but month & day mattum index base pani varum 

// console.log(today); // 2022-01-09T20:16:36.795Z



//setmonth(month, day)

// today.setMonth(0,11);
// console.log(today);

// .to use pannom na normal date ah string ah convert panikalam 

console.log(today.toLocaleDateString()); // 14/1/2026
console.log(today.toLocaleString()); // 14/1/2026, 1:51:16 am
console.log(today.toDateString()); // Wed Jan 14 2026
console.log(today.toTimeString()); // 01:51:16 GMT+0530 (India Standard Time)



