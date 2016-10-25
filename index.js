var express = require('express');
var exphbs = require('express-handlebars');
var user = require('./controllers/login');
var bodyParser = require('body-parser');

var app = express();

// setup template engine
app.engine('.hbs', exphbs({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

// serving static files
app.use(express.static('public'));

// parse post body
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/login', function(req, res) {
    res.render('login');
});

app.post('/login', function(req, res) {
    user.userLogin(req.body.username, req.body.password);
})

var listener = app.listen(3000, function() {
    console.log('Example app listening on port ' + listener.address().port);
});
