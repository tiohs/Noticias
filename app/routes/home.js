module.exports = function(app) {
    app.get('/', (req, res) => res.render('home/index'));
    app.get('/shownoticias', (req,res) => res.render('home/noticia'));
};
