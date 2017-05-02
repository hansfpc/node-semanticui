var mysql = require('mysql'),
    dateFormat = require('dateformat');

module.exports = {
  // Controller's functions
  getProducts: function (req, res, next) {
    var config = require('../database/config');
    var db = mysql.createConnection(config);
    db.connect();
    var products = null;
    db.query('SELECT * FROM products', function (err, rows, fields) {
      if (err) throw err;
      products = rows;
      db.end();

      res.render('products/products', { products });
    })
  },
  getNewProduct: function (req, res, next) {
    res.render('products/newProduct');
  },
  postNewProduct: function (req, res, next) {
    var currentDate = new Date();
    var date = dateFormat(currentDate, 'yyyy-mm-dd h:MM:ss');
    var product = {
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      created_at: date
    };
    var config = require('../database/config');
    var db = mysql.createConnection(config);
    db.connect();

    db.query('INSERT INTO products SET ?', product, function (err, rows, fields) {
      if (err) throw err;
      db.end();
    });
    res.render('products/newProduct', { info: 'product was successful created!' });
  },
  deleteProduct: function (req, res, next) {
    var id = req.body.id;
    var config = require('../database/config');
    var db = mysql.createConnection(config);
    db.connect();
    var response = {res : false};
    db.query('DELETE FROM products WHERE id_product = ?', id, function (err, rows, fields) {
      if (err) throw err;
      db.end();
      response.res = true;
      res.json(response)
    })
  },
  getEditProduct: function (req, res, next) {
    var id = req.params.id;
    var config = require('../database/config');
    var db = mysql.createConnection(config);
    db.connect();
    var product = null;
    db.query('SELECT * FROM products WHERE id_product = ?', id, function (err, rows, fields) {
      if (err) throw err;
      product = rows;
      db.end();
      res.render('products/editProduct', { product })
    })
  },
  postEditProduct: function (req, res, next) {
    var product = {
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
    };
    var config = require('../database/config');
    var db = mysql.createConnection(config);
    db.connect();
    db.query('UPDATE products SET ? WHERE ?', [product, { id_product : req.body.id_product }], function (err, rows, fields) {
      if (err)  throw err;
      db.end();
    });
    res.redirect('/products')
  }
};