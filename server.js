const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    var now = new Date().toString();
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', () =>{
    return text.toUpperCase();
});

app.get('/', (req, res) =>{
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) =>{
    res.render('about.hbs',{
        pageTitle: 'About Page'
    });
});


app.listen(3000, () =>{
    console.log('server running on port 3000...');
});
