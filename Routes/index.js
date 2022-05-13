const express = require('express');
const router = express.Router();
const { validateProductName, findProduct } = require('../Middleware');

let sales = [
	{
    id: 0,
		"productName": "CPU RedDragon",
		"infos": {
			"saleDate": "19/02/2022",
			"warrantyPeriod": 3
		}
	},
	{
    id: 1,
		"productName": "CPU RedDragon",
		"infos": {
			"saleDate": "19/02/2022",
			"warrantyPeriod": 3
		}
	}
];

router.post('/sales', validateProductName, (req, res) => {
  // const { productName, infos } = req.body;
  sales.push(req.body)
  res.send('Produto adicionado com sucesso!')
});

router.get('/sales', (_req, res) => {
  res.send(sales);
});

router.delete('/sales/:id', findProduct, (req, res) => {
  const dataSale = JSON.parse(sales);
  const { id } = req.params;
  console.log(id);
  const tititi = dataSale.find((prod) => prod.id === id);
  console.log(tititi);
  res.send('Produto deletado com sucesso');
});

module.exports = { router, sales };
