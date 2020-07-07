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

// Brackets [] - Character Sets
re = /gre[ae]y/i;  // Optional charcter
re = /[GF]ray/;    // Must be a G or F
re = /^[GF]ray/i;  // Match anything except a G or F
re = /[A-Z]ray/i;  // Match any upper case letter
re = /[a-z]ray/;  // Match any lowercase letter.
re = /[A-Za-z]ray/i;  // Match any letter
re = /[0-9][0-9]ray/;  // Match any digit //What is this?

// Braces {} - Quantifiers
re = /Hel{2}lo/i;   //Must occur exactly {m} amount of times.

re = /Hel{2,4}o/i;  // Must occur exactly {m}

re = /Hel{2,}o/i;   //Must occur at least {m} times.

// Parentheses () -Grouping
re = /^([0-9]x){3}$/

// Shorthand Character classes
re = /\w/;  //Word Charcter - alphanumeric or _
re = /\w+/;  // + = one or more
re = /\d/;   //Match any digit
re = /\d+/;   //Match any digit 0 or more times
re = /\D/;   // Match any Non-digits
re = /\s/;   // Match a whitespace char.
re = /\S/;   // Match a whitespace char.
re = /Hell\b/i // This is a word boundary

//Assertion
re = /x(?=y)/;  //Matrch x only if followed by y.
re = /x(?!y)/;  //Matrch x only if followed by y.

//String to match
const str ='sarafxyghhfkld';  //y can't match


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