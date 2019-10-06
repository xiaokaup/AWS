'use strict'

const express = require('express');
const bodyParse = require('body-parser');
const db = require('./queries');

// contants
const PORT = 8080;

// App
const app = express();

app.use(
	bodyParse.urlencoded({
		extended: true,
	})
)
app.get('/', (request, response) => {
	response.json({info: 'Node.js, Express, and Postgres API'});
});

app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`)
});