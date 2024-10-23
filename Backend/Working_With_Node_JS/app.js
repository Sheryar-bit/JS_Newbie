const GithubDATA = {
    "login": "Sheryar-bit",
    "id": 132276541,
    "node_id": "U_kgDOB-JhPQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/132276541?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Sheryar-bit",
    "html_url": "https://github.com/Sheryar-bit",
    "followers_url": "https://api.github.com/users/Sheryar-bit/followers",
    "following_url": "https://api.github.com/users/Sheryar-bit/following{/other_user}",
    "gists_url": "https://api.github.com/users/Sheryar-bit/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Sheryar-bit/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Sheryar-bit/subscriptions",
    "organizations_url": "https://api.github.com/users/Sheryar-bit/orgs",
    "repos_url": "https://api.github.com/users/Sheryar-bit/repos",
    "events_url": "https://api.github.com/users/Sheryar-bit/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Sheryar-bit/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Muhammad Sheryar",
    "company": "DHA SUFFA UNIVERSITY",
    "blog": "",
    "location": "Pakistan",
    "email": null,
    "hireable": null,
    "bio": "Shaping Future Algorithms | Campus Ambassador @ GSSoC '24 | Open Source Contributor",
    "twitter_username": null,
    "public_repos": 19,
    "public_gists": 0,
    "followers": 3,
    "following": 4,
    "created_at": "2023-05-01T13:44:56Z",
    "updated_at": "2024-09-28T09:24:08Z"
}

require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', function(req, res){
    res.send('Hello World!')
})

app.get('/facebook', function(req, res) {
    res.send('Hello Facebook!')
})

app.get("/login", function(req, res) {
    res.send("<h2>Please login! </h2>")
})

app.get('/youtube', function(req, res) {
    res.send('<h1>welcome to YouTube</h2>')
})

app.get('/github', function(req, res) {
    res.json(GithubDATA)
})

app.listen(process.env.port, function() {
    console.log(`Example app listening to a port ${port}`);
    
})