const express = require('express');
const jsonServer = require('json-server');

const app = express();

const PORT = process.env.PORT || 8080;

app.use('/api', jsonServer.router('db.json'));
app.use(express.static(__dirname + '/dist/gerenciador-jogos'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/gerenciador-jogos/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta: ' + PORT);
})