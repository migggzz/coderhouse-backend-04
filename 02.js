const post = [
    {title: "post one", body: "this is post one"},
    {title: "post two", body: "this is post two"}   
];

function getPosts() {
    setTimeout(() => {
        let output = ''
        post.forEach((post) => {
            output += `<li> ${post.body} </li> `;
            console.log(post.body)
        })
        document.body.innerHTML = output;
    },1000)
}

function createPost(post1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            post.push(post1);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 1000);
    });
}

getPosts();
createPost({title: "post three", body: "this is post three"}).then(getPosts).catch(err => console.log(err));