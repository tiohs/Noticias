module.exports = function(app){

    app.get('/noticias', (req,res) => app.app.controllers.noticiaCon.noticiasM(app,req,res));
    app.get('/noticia', (req,res) => app.app.controllers.noticiaCon.noticiaM(app,req,res));
    app.get('/post', (req,res) => app.app.controllers.noticiaCon.postM(app,req,res));

}