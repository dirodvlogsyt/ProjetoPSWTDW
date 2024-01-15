const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const app = express();

t
passport.use(new LocalStrategy((username, password, done) => {
  
  const user = { id: 1, username: 'user', password: 'password' };
  if (username === user.username && bcrypt.compareSync(password, user.password)) {
    return done(null, user);
  } else {
    return done(null, false, { message: 'Usuário ou senha inválidos' });
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
 
  const user = { id: 1, username: 'user' };
  done(null, user);
});

app.use(require('express-session')({ secret: 'secretpassword', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.post('/Login', passport.authenticate('local', { successRedirect: '/DetalhesPPRestaurante', failureRedirect: '/Login' }));


app.get('/Signup', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
