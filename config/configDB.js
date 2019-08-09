const mysql = require('mysql');
var connMysql = function(){
    console.log('Ok');
    return connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'portal_noticias'});
}
module.exports = function (){
    return connMysql;
}