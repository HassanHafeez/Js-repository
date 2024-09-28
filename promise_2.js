// Create a promise that simulates a network request
function fetchUserData(username) {
  return new Promise((resolve, reject) => {
    // Simulate a network delay
    setTimeout(() => {
      // Simulate a successful response
      const userData = {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com"
      };
      resolve(userData);
    }, 2000);
  });
}

// Create a promise that simulates a database query
function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    // Simulate a database delay
    setTimeout(() => {
      // Simulate a successful response
      const userPosts = [
        { id: 1, title: "Post 1", content: "This is post 1" },
        { id: 2, title: "Post 2", content: "This is post 2" }
      ];
      resolve(userPosts);
    }, 1500);
  });
}

// Create a promise that simulates a file upload
function uploadFile(file) {
  return new Promise((resolve, reject) => {
    // Simulate a file upload delay
    setTimeout(() => {
      // Simulate a successful response
      const fileUrl = "https://example.com/uploaded-file.jpg";
      resolve(fileUrl);
    }, 3000);
  });
}

// Chain the promises together
fetchUserData("johndoe")
  .then((userData) => {
    console.log(`User data: ${JSON.stringify(userData)}`);
    return fetchUserPosts(userData.id);
  })
  .then((userPosts) => {
    console.log(`User posts: ${JSON.stringify(userPosts)}`);
    const file = { name: "example.jpg", size: 1024 };
    return uploadFile(file);
  })
  .then((fileUrl) => {
    console.log(`File uploaded: ${fileUrl}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
