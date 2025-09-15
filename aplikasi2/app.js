const express = require('express');
const app = express();
const port = 3000;

//Membuat route halaman home
app.get('/', (req, res) => {
  res.send('Hello, ini halaman home :D!');
});

//Membuat middleware untuk parsing JSON
app.use(express.json());

//membuat route halaman submit
app.post('/submit', (req, res) => {
  const { name,npm,jeniskelamin } = req.body;
  res.send(`Hello, ${name} dengan NPM ${npm} dan Jenis Kelamin ${jeniskelamin}, data kamu sudah kami terima!`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

app.get('/text', (req, res) => {
  res.send('This is the about page.');
});

app.get('/html', (req, res) => {
    res.send('<h1>This is HTML content</h1><p>Welcome to the HTML page!</p>');
});

app.get('/json', (req, res) => {
    res.json({ message: 'This is JSON content', status: 'success' });
});

app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/index.html`);
    
});