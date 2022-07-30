'use strict';

var response = require('../res');
var connection = require('../config/database');

exports.categories = function(req, res) {
    connection.query('SELECT * FROM kategori', function (error, rows, fields){
        if(error){
            console.log(error)
            
        } else{
            res.render('create',{data2:rows})
            // response.ok(rows, res)

        }
    });

};
exports.createCategories = function(req,res){

    let id_kategori = req.body.id_kategori;
    let nama_kategori = req.body.id_kategori;
    
    connection.query('INSERT INTO kategori (id_kategori, nama_kategori) values (?,?)',
    [id_kategori,nama_kategori],
function(error,rows,fields){
    if(error){
        console.log(error)
    }else{
        response.ok("Berhasil Menambahkan Kategori!!", res)
    }
});
};

exports.updateBooks = function(req, res) {

    let id_kategori = req.body.id_kategori;
    let nama_kategori = req.body.id_kategori;

connection.query('UPDATE kategori SET nama_kategori = ? WHERE id_kategori = ?' ,
[nama_kategori,id_kategori],
function(error,rows,fields){
    if(error){
        console.log(error)
    }else{
        response.ok("Berhasil memperbarui kategori!!", res)
    }
    
});
};

exports.deleteCategories = function(req, res) {

let buku_id=req.body.buku_id;

connection.query('DELETE FROM buku WHERE id_kategori = ?',
[ buku_id ],
function (error, rows, fields){
    if(error){
        console.log(error)
    } else{
        response.ok("Berhasil menghapus user!", res)
    }
});
};

