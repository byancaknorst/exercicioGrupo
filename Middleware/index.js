function validateProduct(req, res, next){
  const regexValidateDate = /^(\d{2})([-\/.]?)(\d{2})\2(\d{4})$/;
  const { productName, infos } = req.body;
  if(!productName) return res.status(400).json({"message": "O campo productName é obrigatório"})
  if(productName.length < 4) return res.status(400).send({"message": "O campo productName deve ter pelo menos 4 caracteres"});
  if(!infos) return res.status(400).json ({ "message": "O campo infos é obrigatório" });
  const infosData = Object.keys(infos);
  if(!infosData.includes('saleDate', 'warrantyPeriod')) return res.status(400).json({"message": "O campo infos precisa conter as chaves saleDate e warrantyPeriod"});
  if(!regexValidateDate.test(infos.saleDate)) return res.status(400).json({ "message": "O campo saleDate é obrigatório" });
  if(!infos.warrantyPeriod) return res.status(400).json({ "message": "O campo warrantyPeriod é obrigatório" });
  if(+infos.warrantyPeriod < 1 || +infos.warrantyPeriod > 3) return res.status(400).json({ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" });
  next();
};

function validateUser(req, res, next){
  const { email, password, firstName, phone } = req.body;
  if(!email || !password || !firstName || !phone) return res.status(400).json({ message: 'missing fields' });
  next();
};

function auth(req, res, next){
  const { authorization } = req.headers;
  const token = authorization.split(' ')[1];
  if(token.length !== 16) return res.status(401).json({ message: 'Token inválido!' });
  next();
};

module.exports = { validateProduct, validateUser, auth };
