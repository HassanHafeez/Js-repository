// Create a promise
let promise = new Promise((resolve, reject) => {
  // Simulate a delay
  setTimeout(() => {
    // Resolve the promise with a value
    resolve("Hello, World!");
  }, 2000);
});

// Use the promise
promise.then((value) => {
  console.log(value); // Output: "Hello, World!"
});
