const user = {
    lastActivityTime: null,
    posts: [],
};

// Simulated function to create a post with a delay
function createPost(postTitle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.posts.push({ title:"post1"});
            resolve();
        }, 1000); // Simulating a 1-second delay for creating a post
    });
}

// Simulated function to delete the last post with a delay
function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (user.posts.length > 0) {
                const deletedPost = user.posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000); // Simulating a 1-second delay for deleting a post
    });
}

// Function to update the user's last activity time with a 1-second delay
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date();
            resolve();
        }, 1000); // Simulating a 1-second delay for updating the activity time
    });
}

// Function to perform the desired sequence of actions
async function performActions() {
    try {
        await createPost("Post 1");
        await updateLastUserActivityTime();
        console.log("Posts:", user.posts,"Last Activity Time:", user.lastActivityTime);

        const deletedPost = await deleteLastPost();
        console.log("Deleted Post:", deletedPost);

        console.log("New Posts:", user.posts);
    } catch (error) {
        console.error(error);
    }
}

// Call the function to perform the actions
performActions();
