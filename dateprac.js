const now=new Date();
//set a specif date and time
//month counting starts with zero!
const randomDate=new Date(2015,3,12,6,6,25,48);
const win95launch=new Date(1995,7,24);
console.log(randomDate);
console.log(win95launch);
const demoDate=new Date();
demoDate.setMonth(0);
console.log(`Day of the week:${demoDate.getDay()}`);
console.log(`Date:${demoDate.getDate()}`);