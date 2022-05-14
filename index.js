const express = require('express');
const app = express();
const { router } = require('./Routes')

app.use(express.json());
app.use(router);
app.listen(2022, () => {
  console.log('Tudo OK', 2022) ;
});
