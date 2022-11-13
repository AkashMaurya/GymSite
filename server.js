const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const PORT = process.env.PORT || 3000;
// const mySite = path.join(__dirname + "./views");


app.set('view engine', 'ejs');

// app.use(express.static(mySite));

app.get("/", (req, res) => {
    res.render('index', {
        title: "Home Page"
    });
})

// app.get("/about", (req, res) => {
//     res.render('about', {
//         title: "About Page"
//     });
// })
// app.get("/gallery", (req, res) => {
//     res.render('gallery', {
//         title: "Gallery Page"
//     });
// })
// app.get("/contact", (req, res) => {
//     res.render('contact', {
//         title: "Contact Page"
//     });
// })
app.get("*", (req, res) => {
    res.render('404', {
        title: "Page Not Found"
    });
})

app.listen(PORT, (req, res) => {
    console.log(`Server is listening on ${PORT}`);
})

