var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();
var expressValitador = require('express-validator');
// Chamado as ejs para renderizar as viws  
app.set('view engine', 'ejs');
app.set('views','./app/views');
app.use(bodyParser.urlencoded({extended: true})); // Para receber os dados da requisição 
app.use(express.static('./app/public')); // Para usar as configuração do html como {Css,js,boostrap etc}
app.use(expressValitador());
// includo todas as rotas 
consign()
    .include('./app/routes')
    .then('./config/configDB.js')
    .then('./app/models')
    .then('./app/controllers')
    .into(app);

module.exports = app; 