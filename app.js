const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.locals.title = 'Default Title';

app.get('/', (request, response) => {
  response.render('index', {
    title: 'Home Page',
    message:
      'Welcome to the website, click on the links above to find out about Angèle and some of her works'
  });
});

app.get('/about', (request, response) => {
  response.render('profile', {
    title: 'About Angèle',
    name: 'Angèle van Laeken',
    stageName: 'Angèle',
    occupation: 'singer-songwriter',
    age: 25,
    birthplace: { city: 'Brussels', country: 'Belgium' },
    musicalInfluences: ['Ella Fitzgerald', 'Hélène Ségara']
  });
});

app.get('/works', (request, response) => {
  response.render('works', {
    title: "Angèle's works",
    songs: [
      'Balance ton quoi',
      'Flou',
      'Perdu',
      'La Thune',
      'Je veux tes yeux',
      'La Loi de Murphy',
      'Jalousie',
      'Oui ou Non'
    ]
  });
});

app.get('/photogallery', (request, response) => {
  response.render('photos', {
    title: 'Photos of Angèle',
    concertPhotos: ['/angele-singing.jpg', '/angele.jpg']
  });
});

app.listen(3020);
