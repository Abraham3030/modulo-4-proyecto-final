const express = require('express');
const path    = require('path');
const app = express();
const PORT      = process.env.PORT || 3000;
const publicPath = path.join(__dirname, './public');
app.use( express.static( publicPath ));

app.get('/', (req,res) => {
    res.sendFile('./index.html', {root: 'views'});
});

// Clase 11
app.get('/proyecto-clase-11', (req,res) => {
    res.sendFile('/proyecto-clase-11.html', {root: 'views/proyecto'})
});
app.get('/practica-clase-11', (req,res) => {
    res.sendFile('/practica-clase-11.html', {root: 'views/practica'})
});

// Clase 12
app.get('/proyecto-clase-12', (req,res) => {
    res.sendFile('/proyecto-clase-12.html', {root: 'views/proyecto'})
});
app.get('/practica-clase-12', (req,res) => {
    res.sendFile('/practica-clase-12.html', {root: 'views/practica'})
});

// Clase 13
app.get('/proyecto-clase-13', (req,res) => {
    res.sendFile('/proyecto-clase-13.html', {root: 'views/proyecto'})
});
app.get('/practica-clase-13', (req,res) => {
    res.sendFile('/practica-clase-13.html', {root: 'views/practica'})
});

// Clase 14
app.get('/proyecto-clase-14', (req,res) => {
    res.sendFile('/proyecto-clase-14.html', {root: 'views/proyecto'})
});
app.get('/practica-clase-14', (req,res) => {
    res.sendFile('/practica-clase-14.html', {root: 'views/practica'})
});

// Clase 15
app.get('/proyecto-clase-15', (req,res) => {
    res.sendFile('/proyecto-clase-15.html', {root: 'views/proyecto'})
});
app.get('/practica-clase-15', (req,res) => {
    res.sendFile('/practica-clase-15.html', {root: 'views/practica'})
});
app.get('/login', (req,res) => {
    res.sendFile('/login-clase-15.html', {root: 'views/practica'})
});
app.get('/register', (req,res) => {
    res.sendFile('/register-clase-15.html', {root: 'views/practica'})
});

// Clase 16
app.get('/proyecto-clase-16', (req,res) => {
    res.sendFile('/proyecto-clase-16.html', {root: 'views/proyecto'})
});
app.get('/practica-clase-16', (req,res) => {
    res.sendFile('/practica-clase-16.html', {root: 'views/practica'})
});
app.get('/Mercado-Liebre', (req,res) => {
    res.sendFile('/practica-clase-16.html', {root: 'views/practica'})
});
app.post('/Mercado-Liebre', (req,res) => {
    res.sendFile('/practica-clase-16.html', {root: 'views/practica'})
});




app.listen( PORT, () => {
    console.log('Servidor corriendo en el puerto 3000', PORT);
});