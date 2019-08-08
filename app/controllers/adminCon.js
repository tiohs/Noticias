module.exports.admin = function (app,req,res) {
    res.render('admin/login');
} 
module.exports.noticias_salvar = function (app,req,res) {
    var noticia = req.body;
    var connection = app.config.configDB();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    req.assert('titulo','Titulo é obrigatorio ').notEmpty();
    req.assert('noticia','n').notEmpty();
    var erros = req.validationErrors();
    if(!erros){
        noticiasModel.salvarN(noticia, function(error, result){
            res.redirect('/noticias');
        });
    }
    else{
        res.redirect('/noticias');
    }
}
module.exports.categoria_salvar = function (app,req,res) {
    var categoria = req.body;
    var connection = app.config.configDB();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    req.assert('Categoria','Titulo é obrigatorio ').notEmpty();
    var erros = req.validationErrors();
    if(!erros){
        noticiasModel.salvarC(categoria, function(error, result){
            res.redirect('/categoria');
        });
    }
    else{
        res.redirect('/categoria');
    }
}

module.exports.deletar = function(app,req,res){
    var connection = app.config.configDB();
    var id_deletar = req.query.id;
    var noticiasModel = new app.app.models.noticiasModel(connection);
    if(!parseInt(id_deletar)){
        res.redirect('/noticias');
    }
    else {
        noticiasModel.Deletar((error, result) => res.redirect('/noticias'),id_deletar);
    }
}

module.exports.categoria = function(app,req,res){
    var connection = app.config.configDB();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    noticiasModel.getCat((error, result) => res.render('admin/categories', { dado : result }));
}

module.exports.noticiasM = function (app,req,res){
    var connection = app.config.configDB();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    noticiasModel.getNoticias(function(error, result){
        noticiasModel.getCat(
            function(error1, result1){
                console.log(result);
                res.render('noticias/noticias', { dado : result, dados : result1 });
            }
        );
    });
}
module.exports.usersM = function (app,req,res){
    res.render('noticias/users');
}