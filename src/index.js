const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP LOGGER
app.use(morgan('combined'));

// TEMPLATE ENGINE
app.engine('.hbs', handlebars(
  {extname: '.hbs'}
));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})