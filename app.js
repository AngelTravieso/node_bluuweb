import express from 'express'
const app = express();
const port = 5000;

// middleware
app.use(express.static('public'));
// Para poder leer req.body que vienen de un formulario
app.use(express.urlencoded({ extended: true }));

// app.get('/formulario', (req, res) => {
//     console.log(req.query.nombre);
//     console.log(req.query.apellido);
//     res.send('formulario enviado...' + req.query.nombre);
// });

app.post('/formulario', (req, res) => {
    console.log(req.body);
    res.send('formulario enviado...');
});

app.get('/', (req, res) => {
    res.send('visitaste la pagina de inicio');
});

app.get('/topisimos', (req, res) => {
    res.send('visitaste a topisimos');
});


app.post('/topisimos', (req, res) => {
    res.send('visitaste a topisimos a traves del post');
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});