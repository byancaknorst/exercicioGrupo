const express = require('express');
const router = express.Router();
const { validateProduct } = require('../Middleware');

let sales = [
	{
    "id": 1,
		"productName": "CPU RedDragon",
		"infos": {
			"saleDate": "19/02/2022",
			"warrantyPeriod": 3
		}
	},
	{
    "id": 2,
		"productName": "CPU RedDragon",
		"infos": {
			"saleDate": "19/02/2022",
			"warrantyPeriod": 3
		}
	}
];

router.post('/sales', validateProduct, (req, res) => {
  // const { productName, infos } = req.body;
  sales.push(req.body)
  res.send('Produto adicionado com sucesso!')
});

router.get('/sales', (_req, res) => {
  res.send(sales);
});

router.delete('/sales/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  sales = sales.filter((prod) => prod.id !== +id);
  res.send('Produto deletado com sucesso!');
});

module.exports = { router, sales };
