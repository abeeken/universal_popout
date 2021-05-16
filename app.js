var express = require('express');
var site = express();
var port = 3000;

site.use(express.static(__dirname + '/public'));

site.set('views', './src/views');
site.set('view engine', 'pug');

site.get('/', function(req, res){
    res.render('index');
});

site.get('/about', function(req, res){
    res.render('about');
});

site.listen(port, () => console.log(`App listening on port ${port}`))