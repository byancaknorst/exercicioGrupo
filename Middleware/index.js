const express = require('express');
const app = express();
const { sales } = require('../Routes')

function validateProduct(req, res, next){
  const regexValidateDate = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
  const { productName, infos } = req.body;
  if(!productName) return res.status(400).json({"message": "O campo productName é obrigatório"})
  if(productName.length < 4) return res.status(400).send({"message": "O campo productName deve ter pelo menos 4 caracteres"});
  if(!infos) return res.status(400).json ({ "message": "O campo infos é obrigatório" });
  const infosData = Object.keys(infos);
  if(!infosData.includes('saleDate', 'warrantyPeriod')) return res.status(400).json({"message": "O campo infos precisa conter as chaves saleDate e warrantyPeriod"});
  if(infos.saleDate )
  next();
};


module.exports = { validateProduct };
