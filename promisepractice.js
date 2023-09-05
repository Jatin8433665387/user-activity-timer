const user = {
    lastActivityTime:null,
    post:[]
};

async function createNewPost(postTitle){
    return new Promise((res,rej) =>{
        setTimeout(() => {
            user.post.push({title:"post1"});
            res();
        },0);
    })
}

async function deleteLastPost() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (user.posts.length > 0) {
                const deletedPost = user.posts.pop();
                res(deletedPost);
            } else {
                re("ERROR: No posts to delete");
            }
        }, 1000)
    });
}
async function lastUserActivity(){
    return new Promise((res,rej) => {
        setTimeout(() =>{
            user.lastActivityTime = new Date();
            res();
        })
    })
}

async function main(){
    try {
        await createNewPost("Post 1");
        await lastUserActivity();
        console.log("Posts is:", user.posts,"Last Activity Time:", user.lastActivityTime);

        const deletedPost = await deleteLastPost();
        console.log("Deleted Post:", deletedPost);

        console.log("New Posts:", user.posts,"Last Activity Time:", user.lastActivityTime);
    } catch (error) {
        console.error(error);
    }
}