const express = require('express');
const app = express();
const { sales } = require('../Routes')

function validateProductName(req, res, next){
  const { productName } = req.body;
  if(!productName) return res.status(400).json({"message": "O campo productName é obrigatório"})
  if(productName.length < 4) return res.status(400).send({"message": "O campo productName deve ter pelo menos 4 caracteres"});
  next();
};

function findProduct(req, res, next){
  const { id } = req.body;
  console.log(sales);
  next();
};

module.exports = { validateProductName, findProduct };
