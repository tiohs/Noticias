module.exports = function(app) {
    app.get('/', (req, res) => app.app.controllers.homeCon.homeIni(app,req,res));
    app.get('/shownoticias', (req,res) => res.render('home/noticia'));
};
