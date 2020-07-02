let val;

const today = new Date();
let birthday = new Date ('9-10-1981 11:25:00');
birthday = new Date ('September 10 2000');
birthday = new Date('9/10/2002');

val = today.getMonth();
val = today.getDate();
val = today.getDay(); ///Doubt
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getUTCMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

console.log (val);
console.log (birthday);