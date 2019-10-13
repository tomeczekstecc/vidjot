const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const passport = require('passport');
// // Load Idea Model
// require('../models/Idea');
// const Idea = mongoose.model('ideas');

//useer login route
router.get('/login', (req, res) => {
  res.render('users/login');
});

//useer register route
router.get('/register', (req, res) => {
  res.render('users/register');
});

//register form POST
router.post('/register', (req, res) => {
  let errors = [];
  if (req.body.password !== req.body.password2) {
    errors.push({ text: "Passwords don't match" });
  }
  if (req.body.password.length < 6) {
    errors.push({ text: 'Password must be at least 6 charchters long' });
  }
  if (errors.length > 0) {
    res.render('users/register', {
      errors: errors,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    });
  } else {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2
    };

    bcrypt.genSalt()
    res.send('passed');
  }
});

module.exports = router;
