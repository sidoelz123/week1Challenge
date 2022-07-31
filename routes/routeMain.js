'use strict';

module.exports = function(app) {
    var ujianChunnin = require('../controllers/controllerBooks');
    var kategori = require('../controllers/controllerCategories');

    // Display all Books
    app.route('/')
        .get(ujianChunnin.books);

    // Create Books
    app.route('/buku')
        .get(ujianChunnin.addBooks);
    app.route('/buku')
        .post(ujianChunnin.createBooks);

    // Read Books by ID
    app.route('/buku/:buku_id')
        .get(ujianChunnin.readBooks);
    
    // Update Books by ID
    app.route('/edit/:id')
        .get(ujianChunnin.editBooks);
    app.route('/update')
        .put(ujianChunnin.updateBooks);

    // Delete Books by ID
    app.route('/delete/:id')
        .get(ujianChunnin.deleteBooks);


    // Kategori
    app.route('/kategori')
        .get(kategori.categories);
};