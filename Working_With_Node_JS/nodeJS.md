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

**JSON (JavaScript Object Notation)** is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data between a server and a web application or between different systems.

### Key Features of JSON:
1. **Text-based format**: JSON is a plain text format that can be read by humans and machines.
2. **Lightweight**: It is concise and minimal, which makes it efficient for data transmission.
3. **Language-independent**: JSON can be used with almost any programming language (e.g., JavaScript, Python, Java, etc.).

### JSON Syntax Rules:
- Data is organized as **key-value pairs**.
- Keys are strings enclosed in double quotes.
- Values can be strings, numbers, objects, arrays, `true`, `false`, or `null`.
- Data is enclosed in `{}` for objects and `[]` for arrays.

### Example of JSON:
```json
{
  "name": "Muhammad Sheryar",
  "age": 22,
  "skills": ["JavaScript", "Python", "Java"],
  "isBackendDeveloper": true
}
```

### Common Use Cases:
- **APIs**: JSON is often used in RESTful APIs to send and receive data.
- **Configuration files**: JSON is used for storing application settings.
- **Data exchange**: JSON is used to exchange data between client-side and server-side applications.

### API (Application Programming Interface):  
An API is a set of rules and protocols that allows one software application to interact with another. It defines how requests and responses should be made, enabling data exchange and functionality access between systems.

### Endpoint:  
An endpoint is a specific URL or URI in an API that performs a specific function. It represents a single entry point where the client sends a request to access resources or perform an action on the server.  

#### Example:  
- API Base URL: `https://api.example.com`  
- Endpoint for fetching user data: `/users/{id}`  

Complete URL: `https://api.example.com/users/123` (Fetches data for user with ID 123).

**Methods to share data**: GET, POST, PATCH, DELETE
### **HTTP Methods**:  

1. **GET**:  
   - **Purpose**: Retrieve data from the server.  
   - **Example**: Fetch user details.  
   - **Idempotent**: Yes (same request returns the same response).  
   - **Example URL**: `GET /users/123`  

2. **POST**:  
   - **Purpose**: Create new resources on the server.  
   - **Example**: Add a new user.  
   - **Idempotent**: No (creates a new resource with each request).  
   - **Example URL**: `POST /users` (with data in the request body).  

3. **PATCH**:  
   - **Purpose**: Partially update an existing resource.  
   - **Example**: Update a user’s email.  
   - **Idempotent**: Yes (if the same patch is applied multiple times, the result remains the same).  
   - **Example URL**: `PATCH /users/123` (with updated fields in the body).  

4. **DELETE**:  
   - **Purpose**: Remove a resource from the server.  
   - **Example**: Delete a user account.  
   - **Idempotent**: Yes (deleting the same resource multiple times results in the same outcome).  
   - **Example URL**: `DELETE /users/123`.  



Made By *Muhammad Sheryar*
ref: *Google, ChatGpt, Node.JS Documentation, Express.JS Documentation*