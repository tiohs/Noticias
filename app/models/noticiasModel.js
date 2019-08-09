function Noticia(connection){
    this._connection = connection;
}
Noticia.prototype.getNoticias = function(callback) {this._connection.query('SELECT * FROM notcias', callback);};
Noticia.prototype.getCat = function(callback) {this._connection.query('SELECT * FROM categorias', callback);};
Noticia.prototype.salvarC = function (noticia ,callback) { this._connection.query('insert into categorias set ?', noticia, callback);};
Noticia.prototype.getNoticia = function (callback, id) {this._connection.query(`SELECT * FROM notcias WHERE id_noticia = ${id}`, callback);};
Noticia.prototype.salvarN = function (noticia ,callback) { this._connection.query('insert into notcias set ?', noticia, callback);};
Noticia.prototype.Deletar = function (callback, id_noticia) {this._connection.query(`DELETE FROM notcias WHERE id_noticia = ${id_noticia} `, callback);};
Noticia.prototype.Update = function (callback) {this._connection.query('update cursos set nomeDaCuluna = "o que vai atuc" where id_noticia = 1',callback)};
Noticia.prototype.get5UltimasNoticias = function(callback){this._connection.query('select * from notcias order by data_criacao limit 5', callback);}

module.exports = function(){
 return Noticia;
}
