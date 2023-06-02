const ejs = require('ejs');
const express = require('express');
const path = require('path');
const { uid } = require('uid');
const methodOverride = require('method-override');
const app = express()

app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.set('views', path.join(__dirname), 'views');
app.set('view engine', 'ejs');

//database

const posts = [
    {
        id : uid(),
        username : "Tommy",
        content : "I like tomatoes"
    }
]

app.get('/posts', (req, res) => {
    res.render('/index', {posts});
})








app.listen(3000);