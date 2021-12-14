const express = require("express");
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');



route.get('/api/v1/books' , controller.books);

route.post('/api/v1/add', controller.add);

route.delete('/api/v1/delete' , controller.delete);

route.put('/api/v1/update/:id', controller.update);


module.exports = route