let re;
//Literal Charcters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i;    // Must start with
re = / world$/i;    // Must ends with
re = /^hello$/i;    //Must begin and end with
re = /h.llo/i;      //Matches any ONE character
re = /h*llo/i;      //Matches any character 0 or more times

re = /gre?a?y/i  // Optional character
re = /gre?a?y\?/i;  //Escape charcter


//String to match
const str = 'Gray?';

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