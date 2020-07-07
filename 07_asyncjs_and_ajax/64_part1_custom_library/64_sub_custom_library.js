const http = new easyHTTP


//GET POSTS
const posts = http.get
http.get('https://jsonplaceholder.typicode.com/posts' ,
function(err, posts){
    if(err){
        console.log (err);
    }else{
        console.log (posts);
    }
});

console.log (posts);

const posts = http.get
http.get('https://jsonplaceholder.typicode.com/posts/1' ,
function(err, post){
    if(err){
        console.log (err);
    }else{
        console.log (post);
    }
});

console.log (posts);

