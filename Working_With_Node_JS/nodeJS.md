***Node.JS docs***

Node.js is a **JavaScript runtime environment** that allows you to run JavaScript code outside of a web browser. It was built on **Google's V8 JavaScript engine**, which powers Chrome, and enables JavaScript to be used for server-side development. 

### Key Features of Node.js

1. **Non-Blocking, Asynchronous I/O**:
   - Node.js is designed to handle multiple requests simultaneously without blocking the main thread. Its event-driven architecture and asynchronous programming model make it highly efficient for I/O-heavy applications, such as those that rely on file systems, databases, or network requests.
   
2. **Single-Threaded Event Loop**:
   - Although Node.js is single-threaded, it can manage multiple concurrent connections thanks to its event loop and asynchronous capabilities. This is different from traditional multi-threaded web servers, which allocate a separate thread for each request. Node’s single-threaded nature helps reduce memory usage and improves performance, especially for tasks that aren’t CPU-intensive.

3. **NPM (Node Package Manager)**:
   - Node.js comes with NPM, a vast library of packages and modules. NPM allows developers to quickly add functionality to their applications, such as handling authentication, interacting with databases, or managing APIs, without needing to build everything from scratch.

4. **Cross-Platform Compatibility**:
   - Node.js is compatible with major operating systems (Windows, macOS, Linux), which makes it versatile for various development and deployment environments.

### Why Use Node.js?

Node.js is especially popular for:
   - **Real-time applications**: Chat applications, online gaming, and live data applications like stock tickers or live score updates.
   - **RESTful APIs**: Node.js’s lightweight nature and JSON support make it ideal for creating APIs that interact with frontend clients.
   - **Single-Page Applications (SPAs)**: Often used with frontend frameworks like React or Angular to create smooth, dynamic SPAs.
   - **Microservices Architecture**: Node.js allows you to create small, lightweight services that work together as part of a larger system.

### Basic Example of Node.js Code

Here’s a simple example of a Node.js server that responds with "Hello, World!" to incoming requests.

```javascript
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

In this example:
- We create a basic HTTP server using Node’s built-in `http` module.
- The server listens on port 3000 and responds with "Hello, World!" to any request.

- Node.JS is built on top of "Chrome v8 Javascript Engine"
**V8 Engine** : Takes JS code and converts it into machine readable language

### Summary
Node.js enables JavaScript to be used beyond the browser, especially in server-side environments, providing scalability, high performance, and access to a vast ecosystem through NPM. This makes it a popular choice for building modern, efficient, and scalable backend applications.

**package.json**: ensures a list of packages with their versions 

**package-lock.json**: ensure detailed of every pacjage installed with version, sub dependencies. Basically it is a detailed version of the package

**nodemon**: Nodemon will save the new changes in the server at the run time and will accept those changes and will restart the server automatically

Made By *Muhammad Sheryar*
ref: *Google, ChatGpt, Node.JS Documentation*