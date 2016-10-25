var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

// setup template engine
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

// serving static files
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/login', function(req, res) {
    res.render('login');
});

var listener = app.listen(3000, function() {
    console.log('Example app listening on port ' + listener.address().port);
});
