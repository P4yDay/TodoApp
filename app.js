var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();
// template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//use todoController module
todoController(app);

//listen to port 3000
app.listen(3000);

console.log(' Aye aye its up! now listening on port 3000 of localhost');


