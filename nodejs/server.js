'use strict'

const express = require('express');
const bodyParse = require('body-parser');
const db = require('./queries');
const fs = require('fs')
const https = require('https')

// contants
const PORT = 8080;
const options = {
  key: fs.readFileSync('private.key'),
  cert: fs.readFileSync('mydomain.crt')
}

// App
const app = express();
const url_prefix="";

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method == "OPTIONS") {
    res.send(200);
  }
  else {
    next();
  }
});
app.use(
	bodyParse.urlencoded({
		extended: true,
	})
);
app.use(bodyParse.json());
app.get(url_prefix + '/', (request, response) => {
	response.json({info: 'Node.js, Express, and Postgres API'});
});

app.get(url_prefix + '/users', db.getUsers);
app.get(url_prefix + '/users/:id', db.getUserById);
app.post(url_prefix + '/users', db.createUser);
app.put(url_prefix + '/users/:id', db.updateUser);
app.delete(url_prefix + '/users/:id', db.deleteUser);

app.get(url_prefix + '/heroes', db.getHeroes);
app.get(url_prefix + '/heroes/:id', db.getHeroesById);
app.post(url_prefix + '/heroes', db.createHero);
app.put(url_prefix + '/heroes/:id', db.updateHero);
app.delete(url_prefix + '/heroes/:id', db.deleteHero);


https(options, app).listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
});