let re;
//Literal Charcters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i;    // Must start with
re = /d$/i;    // Must ends with


//String to match
const str = 'Hello world'

//Log result
const result = re.exec(str);
console.log(result);

function reTest (re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}` );
    }
}

reTest(re, str);