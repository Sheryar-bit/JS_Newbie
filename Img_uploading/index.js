const path = require('path');
const express = require('express');
const multer = require('multer');
const { log } = require('console');


const app = express();
const PORT = 8000;

const storage = multer.diskStorage(
    {
        //destination:konsa folder ka andet hama img file kou dtire karna hai
        destination: function (req, file, cb) {
            return cb(null, "./uploads")
        },
        //filename: 
        filename: function (req, file, cb) {
            return cb(null, `${Date.now()}-${file.originalname}`);
        },
    })

    const upload = multer ({storage})


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded());  //urlencoded: help us to parse form data to encode


app.get('/',function(req, res) {
    return res.render("homepage")
})

app.post('/upload', upload.single('profileImg'), function(req, res) {
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/")
    // console.log(req.body);
})

app.listen(
    PORT, function() {
        console.log(`Server is running on port ${PORT}`);
    }
)