module.exports.noticiasM = function (app,req,res){
    var connection = app.config.configDB();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    noticiasModel.getNoticias(function(error, result){
        noticiasModel.getCat(
            function(error1, result1){
                res.render('noticias/noticias', { dado : result, dados : result1 });
            }
        );
    });
}

module.exports.postM = function (app,req,res){
    var connection = app.config.configDB();
    var noticiasMode = new app.app.models.noticiasModel(connection);
    noticiasMode.getNoticias(function(error, result){
                res.render('noticias/posts', { dado : result}); 
    });
}

module.exports.noticiaM = function (app,req,res){
    var connection = app.config.configDB();
    var id_noticia = req.query.id;
    var noticiasModel = new app.app.models.noticiasModel(connection);
    
    if(!parseInt(id_noticia)){
        res.redirect('/noticias');
    }
    else {
        noticiasModel.getNoticia((error, result) => res.render('noticias/noticia', { dado : result }), id_noticia);
    }
}