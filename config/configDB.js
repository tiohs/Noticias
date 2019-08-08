const mysql = require('mysql');
var connMysql = function(){
    console.log('Ok');
    return connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'massango',
    database: 'portal_noticias'});
}
module.exports = function (){
    return connMysql;
}