var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

/* GET home page. */
router.get('/', controllers.HomeController.index);

/* GET products. */
router.get('/products', controllers.ProductController.getProducts);
router.get('/new', controllers.ProductController.getNewProduct);
router.post('/addproduct', controllers.ProductController.postNewProduct);
router.post('/deleteproduct', controllers.ProductController.deleteProduct);
router.get('/editproduct/:id', controllers.ProductController.getEditProduct);
router.post('/editproduct', controllers.ProductController.postEditProduct);

module.exports = router;
