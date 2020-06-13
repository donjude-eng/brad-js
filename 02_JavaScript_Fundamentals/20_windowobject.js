//WINDOWS METHODS / OBJECTS / PROPERTIES


// console.log(123);

// ///ALERT
// window.alert ('Hello world');


///PROMPT

// const input = prompt();
// alert(input);


///CONFIRM

// if (confirm('Are you sure')){
//   console.log ('YES');

// }else{
//   console.log ('NO')
// }

let val;

//Outter height and width
val = window.outerHeight;
val =window.outerWidth;

///Inner height and width
val = window.innerHeight;
val = window.innerWidth;



// SCROLL POINT
val = window.scrollY;
val= window.scrollX


//LOCATION OBJECT

val = window.location;
val =window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;


//REDIRECT

// window.location.href = 'https://www.google.co.in';

//RELOAD
//window.location.reload ();

///HISTORY OBJECT


// window.history.go (-2);

// val = window.history.length

///Navigator Object
val=window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log (val);