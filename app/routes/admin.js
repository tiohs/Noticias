module.exports = function(app){
    app.get('/admin', (req, res) => app.app.controllers.adminCon.admin(app,req,res));
    app.post('/noticias/salvar',(req, res) => app.app.controllers.adminCon.noticias_salvar(app,req,res));
    app.post('/categoria/salvar',(req, res) => app.app.controllers.adminCon.categoria_salvar(app,req,res));
    app.get('/deletar', (req, res) =>  app.app.controllers.adminCon.deletar(app,req,res));
    app.get('/categoria',(req, res) => app.app.controllers.adminCon.categoria(app,req,res));
    app.get('/users.html',(req,res) => app.app.controllers.adminCon.usersM(app,req,res));
};