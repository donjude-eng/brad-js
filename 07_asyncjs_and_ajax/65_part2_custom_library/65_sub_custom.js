const http = new easyHTTP


// //GET POSTS
// const posts = http.get
// http.get('https://jsonplaceholder.typicode.com/posts' ,
// function(err, posts){
//     if(err){
//         console.log (err);
//     }else{
//         console.log (posts);
//     }
// });

// console.log (posts);

// //Get single post
// const posts = http.get
// http.get('https://jsonplaceholder.typicode.com/posts/1' ,
// function(err, post){
//     if(err){
//         console.log (err);
//     }else{
//         console.log (post);
//     }
// });

// console.log (posts);

//Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',
//     data, function (err, post) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(post);
//         }
//     });

//Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5',
// data , function (err ,post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

//Delete POSTS
const posts = http.get
http.delete('https://jsonplaceholder.typicode.com/posts/1' ,
function(err, response){
    if(err){
        console.log (err);
    }else{
        console.log (response);
    }
});

