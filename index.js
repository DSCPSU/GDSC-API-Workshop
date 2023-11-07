// 1: Regular JavaScript Code Examples
// Function declaration and calling
function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet('Alice')); // "Hello, Alice!"
  
  // String functions
  let text = 'JavaScript is awesome';
  console.log(text.toUpperCase()); // "JAVASCRIPT IS AWESOME"
  
  // The Math object
  let randomNumber = Math.random(); // Generates a random number between 0 and 1
  console.log(randomNumber);
  
  // Working with objects
  const person = {
    name: 'Bob',
    age: 30,
    greet: function() {
      return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    }
  };
  console.log(person.greet()); // "Hi, my name is Bob and I'm 30 years old."
  
  // Object methods like map on arrays
  const numbers = [1, 2, 3, 4, 5];
  const squares = numbers.map(n => n * n);
  console.log(squares); // [1, 4, 9, 16, 25]
  // Other ways of writing it too...
  const squares2 = numbers.map((value) => {
    return value * value
  })
  console.log(squares2)
  
  // 2: Asynchronous JavaScript Code Examples
    // Synchronous code in JavaScript is executed sequentially from top to bottom. Each statement waits for the previous one to finish before executing.
    // For example, when you have a for-loop or any operation that doesn't need to wait for something else, like reading a file from disk or requesting data over the network, it's synchronous.
    // Synchronous example:
    for (let i = 0; i < 5; i++) {
        console.log(i); // This will log numbers 0 to 4 immediately in order.
    }

    // Asynchronous code allows JavaScript to perform operations in the background and can continue running other code in the meantime. It's useful for operations that take some time to complete, like I/O operations.
    // This includes things like fetching data from an API, reading files, or executing a set timeout. In these cases, JavaScript doesn't wait for the operation to complete and can execute subsequent code right away.
    // Asynchronous operations are often handled using callbacks, promises, and async/await syntax.
    // setTimeout example
    setTimeout(() => {
        console.log('This message is shown after 3 seconds');
    }, 3000);
  
  // setInterval example
  let intervalId = setInterval(() => {
    console.log('This message appears every 2 seconds');
  }, 2000);
  
  // To clear the interval, you can call clearInterval(intervalId);
  
  // Promise example
  function getUser(userId) {
    return new Promise((resolve, reject) => {
      // Simulate API call
      setTimeout(() => {
        resolve({ userId: userId, username: 'JohnDoe' });
      }, 1000);
    });
  } //don't worry about these, there is better ways of doing it
  
  // Using async/await
  async function showUser() {
    try {
      let user = await getUser(123);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  }
  showUser();
  
  // 3: Example with fetch
  // Note: Fetch is a Web API for making HTTP requests, it's often used in the browser (and can be used in some server-side environments like Next.js).
  // Fetch will not work natively in Node.js without a polyfill since it's not part of its standard library
  
  // code example with fetch (would be used in a browser or Next.js, not standard Node.js)
  // fetch('https://api.example.com/data')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error('Error:', error));

  //Another way of writing the above code (that is better and more readable for beginners):
  // const response = await fetch('https://api.example.com/data')
  // const data = await response.json()
  // const birthday = data.birthday

  
  // Comment on APIs: An API (Application Programming Interface) allows different pieces of software to interact with each other. It often refers to web APIs, which can be used to fetch data from a server.
  
  // 4: Example with axios for calling an example API
  // First, you have to install Axios in your project: npm install axios
  const axios = require('axios');
  
  async function dallEGen(){
    const bodyData = {
        prompt: ``,
        n: 1,
        size: '1024x1024',
        response_format: "url",
    };
    const config = {
        method: 'post',
        url: 'https://api.openai.com/v1/images/generations',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': '<PUT BEARER FIRST>'
        },
        data : JSON.stringify(bodyData)
    };
    //calls openAI embeddings API and gets response
    const response = await axios(config);
    console.log(response.data.data[0].url)
    return response.data.data
  }
  dallEGen()
  
  
  // Remember that when using an API, it's essential to handle errors and consider rate limits and authentication as required by the API provider.
  