const posts = [
    {title:'Post One' , body: 'This is post one'},
    {title: 'Post Two' , body: 'Thus is post two'}
];

function createPost(post){ // I didn't understad this.
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            posts.push(post);

            const error = true;

            if (!error) {
                resolve();
            }else {
                reject ('Error: Something went wrong');
            }

           } , 2000);
    })

}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);


}

createPost({title: 'Post Three', body: 'This is post three'})

.then(getPosts)
.catch (function(err) {
 console.log(err);
});