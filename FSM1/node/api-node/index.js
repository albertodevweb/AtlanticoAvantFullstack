const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {

  fs.readFile('produtos.json', 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Erro ao carregar os produtos');
    }

    const produtos = JSON.parse(data); 
    res.render('index', { produtos }); 
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
