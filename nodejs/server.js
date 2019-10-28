'use strict'

const express = require('express');
const bodyParse = require('body-parser');
const db = require('./queries');

// contants
const PORT = 8080;

// App
const app = express();
const url_prefix="/nodejs";

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


app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
});