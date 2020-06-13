const name = 'John';
const age = 30;
const job = 'Software Developer';
const city = 'Kochi'

let html;

//Without template strings (es5)

// html = '<ul><li>Name: '+name + '</li><li>Age: ' + age + '</li> <li>Job: ' + job + '</li><li>City: ' + city +' </li></ul>';

// html = '<ul>' +
//    '<li>Name: ' + name + '</li>' +
//    '<li>Age: ' + age + '</li>' +
//    '<li>Job: ' + job + '</li>' +
//    '<li>City: ' + city + '</li>'+
//    '</ul>';


// // With template strings (es6)

function hello () {
  return 'hello';

}

html = `
  <ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Jib: ${job}</li>
  <li>City: ${city}</li>
  <li>${2+2}</li>
  <li>${hello()}</li>
  <li>${age > 28 ? 'Over 30': ' Under 30'}</li>
`;


document.body.innerHTML = html;

