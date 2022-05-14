const express = require('express');
const salesRouter = express.Router();
const { validateProduct, auth } = require('../Middleware');

let sales = [];

salesRouter.post('/', validateProduct, auth, (req, res) => {
  // const { productName, infos } = req.body;
  sales.push(req.body);
  res.status(201).json({ "message": "Venda cadastrada com sucesso" });
});

salesRouter.get('/', (_req, res) => {
  res.send(sales);
});

salesRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  sales = sales.filter((prod) => prod.id !== +id);
  res.send('Produto deletado com sucesso!');
});

module.exports = salesRouter;
