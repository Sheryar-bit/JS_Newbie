import express from "express";
import cors from "cors";

const app  = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
export { app }


/*
1. What is CORS?
CORS stands for Cross-Origin Resource Sharing. It’s a security feature implemented in web browsers to control how resources on a web page can be requested from another domain.

Problem it Solves: Normally, browsers restrict web pages from making requests to a domain different from the one the page was loaded from. This is called the Same-Origin Policy, which prevents scripts on one page from accessing data on a different domain, enhancing security.
Example: Let’s say you have a frontend application running on http://localhost:3000 and an API server on http://localhost:8001. By default, the browser will block requests from the frontend (on port 3000) to the backend (on port 8001) due to different origins.
How CORS Helps: CORS allows the backend to specify which origins (domains) can access its resources. When CORS is enabled in the backend, it sends special headers in the response indicating that it’s okay for the other domain to access the resource.


In the Code:

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true
}));
origin: Here, the backend is allowing access from the origin specified in process.env.CORS_ORIGIN, which is stored in an environment variable.
Credential: Setting Credential: true allows cookies and authentication information to be sent in requests across different domains.
*/