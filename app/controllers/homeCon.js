module.exports.homeIni = function (app,req,res){
    var connection = app.config.configDB();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    noticiasModel.get5UltimasNoticias(function(error, result) {   
       console.log(result);
        res.render('home/index', { dado : result });
    });
}