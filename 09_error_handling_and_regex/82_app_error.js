const user = {email: 'jdoe@gmail.com'};

try {
    //Produce a Reference error
    //myFunction();

    //Produce a TypeError
    //null.myFunction();

    //Will produce a Syntax error
    //console.log(eval('2+2'));
    //eval('Hello world');

    // Will produce a URIError
    //decodeURIComponent('%');


    if(!user.name) {
        //alert('user has no name')
        throw new SyntaxError('User has no name');

    }

} catch(e) {
    console.log(`User Error: ${e.message}`)
    //console.log(e)
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);
} finally {
    console.log('Finally runs regardless of result...');
}

console.log ('Program continuous ...')