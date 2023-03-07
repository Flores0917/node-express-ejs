const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));
//here's our data for users
var data = require('./data/test.json');

app.get('/', (req, res) => {
  var title = 'Home Page'
  res.render('pages/index', { 'title': title })
});

app.get('/sports', (req, res) => {
  var title = 'Sports Page'
  res.render('pages/sports', { 'title': title })
});

app.get('/hikes', (req, res) => {
  var title = 'Hikes Page'
  res.render('pages/hikes', { 'title': title })
});



//users index is our list page
app.get('/videogames', function(req, res) {
  var title = 'Video Games Page';
  res.render('videogames/videogames', {
    title: title,
    users: data
  });
});


//add user/view route - we are cheating by using the array index - 1
// app.get('/users/view/:id', function(req, res) {
//   var title = 'User Page';
//   var id = req.params.id;
//   res.render('users/view', {
//     title: title,
//     user: data[--id]
//   });
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(data);
});