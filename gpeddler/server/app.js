var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../')));

app.get('/ping', function(req, res) {
    res.send('pong!@#');
});

app.get('/', function(req, res) {
    res.render('index', {
        title: "아 정두진 개귀찮네"
    });
});

app.listen(5000);
console.log('listening on port 5000....');
