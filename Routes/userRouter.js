const express = require('express');
const userRouter = express.Router();
const { validateUser } = require('../Middleware')
const generateToken = require('../Utils');


let users = [];

userRouter.post('/', validateUser,  (req, res) => {
  // console.log(req.body);
  const { email, password, firstName, phone } = req.body;
  const user = {email, 
    password,
    firstName,
    phone,
    token: ""
  };
  users.push(user);
  res.send(user);
});

userRouter.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((us) => us.email === email);
  if(user.email === email && user.password === password){
    const token = generateToken();
    const rem = users.filter((rm) => rm.email !== email);
    const userData = {email: user.email, 
      password: user.password,
      firstName: user.firstName,
      phone: user.phone,
      token
    };
    users = [...rem, userData];
    res.send(` token: ${token} `);
  }

});

userRouter.get('/signup', (req, res) => {
  res.send(users);
});


module.exports = userRouter;
