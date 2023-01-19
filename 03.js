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
            const error = false;
            if(!error) {
                post.push(post1);
                resolve();
            } else {
                reject('Error: Promesa sin resolver');
            }
        }, 1000);
    });
}

function createPost1(post1){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            post.push(post1)
            if(!error){
                resolve(`post agregado!`);
            }
            else{
                reject('Error: Promesa sin resolver');
            }
        })
    },500)
}

// getPosts();
createPost({title: "post three", body: "this is post three"}).then((result)=>console.log(result)).then(getPosts).catch(err => console.log(err));
console.log(post);