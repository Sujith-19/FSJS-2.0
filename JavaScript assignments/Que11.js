let date=new Date().getFullYear();
console.log(date);

let date2=new Date().getMonth();
console.log(date2);

let date3=new Date().getDate();
console.log(date3);

let date4=new Date().getDay();
console.log(date4);

let date5= new Date().getHours();
console.log(date5);

let date6= new Date().getMinutes();
console.log(date6);

let past= new Date('1970-01-01');
let now = new Date();

let elapsed=(now-past);
console.log(elapsed/1000);
