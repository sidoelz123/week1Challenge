'use strict';

var response = require('../res');
var connection = require('../config/database');

// check Response backend
exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res);
    response.err("Error 404 not found" , res);
};

// Display All Books
exports.books = function(req, res) {
    connection.query('SELECT * FROM buku', function (error, rows, fields){
        if(error){
            console.log(error)
        
        } else{
            // console.log(rows);
            res.render('index',{data:rows})
        }
    });
};

// Create Books
exports.addBooks=function(req,res){
    connection.query('SELECT * FROM kategori', function(error,rows){
        if (error) {
            console.log("Data Tidak Ada");
        } else {
            res.render('create',{data:rows});
        }
    })
};


exports.createBooks = function(req,res){

    // let buku_id=req.body.buku_id;
    let judul = req.body.judul;
    let penulis = req.body.penulis;
    let deskripsi = req.body.deskripsi;
    let kategori = req.body.kategori;

    connection.query('INSERT INTO buku (judul,penulis,deskripsi,kategori_id) values (?,?,?,?)', 
    [judul,penulis,deskripsi,kategori],
        function(error,rows,fields){
            if(error){
                console.log(error)
            }else{
                res.redirect('/')
            }
    });
};


// Update Books
exports.editBooks=function(req,res){
    let buku_id = req.params.buku_id;
    
    connection.query('SELECT * FROM buku WHERE id_buku=?;',
    [buku_id], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        }else{
            
            res.render('update',{data:rows[0]})
        }
    });
};

exports.updateBooks = function(req, res) {

    let buku_id=req.body.buku_id;
    let judul = req.body.judul;
    let penulis = req.body.penulis;
    let deskripsi = req.body.deskripsi;
    let kategori = req.body.kategori;

    connection.query('UPDATE buku SET judul = ?, penulis = ?, deskripsi = ? , kategori = ? WHERE id_buku = ?' ,
    [judul,penulis,deskripsi,kategori,buku_id],
        function(error,rows,fields){
            if(error){
                console.log(error)
            }else{
                response.ok("Berhasil Menambahkan Buku!!", res)
            }
            
    });
};

// Read Books
exports.readBooks=function(req,res){
    let buku_id = req.params.buku_id;
    
    connection.query('SELECT * FROM buku INNER JOIN kategori ON buku.kategori_id = kategori.id_kategori WHERE id_buku=?;',
    [buku_id], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        }else{
            
            res.render('read',{data:rows})
        }
    });
};


// Delete Books
exports.deleteBooks = function(req, res) {
    let buku_id =req.params.id;

    connection.query('DELETE FROM buku WHERE id_buku = ?',
    [ buku_id ],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            res.redirect('/')
        }
    });
};
