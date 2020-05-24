const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helper');

const port = process.env.PORT || 3000;

 
// Middleware

app.use(express.static( __dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');
//hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Express hbs Engine.
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  //res.send('Hola Mundo');
  res.render('home' , { anio: new Date().getFullYear() });
});

app.get('/about', (req, res) => {
    //res.send('Hola Mundo');
    res.render('about' , { anio: new Date().getFullYear() });
  });
  

 
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto ' + port);
});
