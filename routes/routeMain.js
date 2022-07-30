'use strict';

module.exports = function(app) {
    var ujianChunnin = require('../controllers/controllerBooks');
    var kategori = require('../controllers/controllerCategories');

    // Buku
    app.route('/')
        .get(ujianChunnin.books);


    app.route('/buku/:buku_id')
        .get(ujianChunnin.readBooks);

    app.route('/buku')
        .get(ujianChunnin.addBooks);

    app.route('/edit/:id')
        .get(ujianChunnin.editBooks);

    app.route('/buku')
        .post(ujianChunnin.createBooks);
    
    app.route('/update')
        .put(ujianChunnin.updateBooks);

    app.route('/delete/:id')
        .get(ujianChunnin.deleteBooks);


    // Kategori
    app.route('/kategori')
        .get(kategori.categories);
};