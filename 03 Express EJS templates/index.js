const express = require('express');

// EJS Documentation for Express JS
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index',{WebName:"Rafay"});
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});