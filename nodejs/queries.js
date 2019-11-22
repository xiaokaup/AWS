const Pool = require('pg').Pool
const pool = new Pool({
	user: 'me',
	host: 'postgres',
	database: 'db',
	password: 'me',
	port: 5432
});

const getUsers = (request, response) => {
	pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
		if (error) throw error;
		response.status(200).json(results.rows);
	});
}

const getUserById = (request, response) => {
	const id = parseInt(request.params.id);

	pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
		if (error) throw error;
		response.status(200).json(results.rows);
	})
}

const createUser = (request, response) => {
	const {name, email} = request.body;

	pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
		if (error) throw error;
		response.status(201).send(`User added with ID: ${results.rows[0].id}`);
	});
}

const updateUser = (request, response) => {
	const id = parseInt(request.params.id);
	const {name, email} = request.body;

	pool.query(
		'UPDATE users SET name = $1, email = $2 WHERE id =$3',
		[name, email, id],
		(error, results) => {
			if (error) throw error;
			response.status(200).send(`User modified with ID: ${id}`);
		}
	);
}

const deleteUser = (request, response) => {
	const id = parseInt(request.params.id);

	pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
		if (error) throw error;
		response.status(200).send(`User deleted with ID: ${id}`);
	});
}

// ===================================
const getHeroes = (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	pool.query('SELECT * FROM heroes ORDER BY id ASC', (error, results) => {
		if (error) throw error;
		response.status(200).json(results.rows);
	});
}

const getHeroesById = (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	const id = parseInt(request.params.id);

	pool.query('SELECT * FROM heroes WHERE id = $1', [id], (error, results) => {
		if (error) throw error;
		response.status(200).json(results.rows[0]);
	});
}

const createHero = (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	const {name} = request.body;

	pool.query('INSERT INTO heroes (name) VALUES ($1) RETURNING *', [name], (error, results) => {
		if (error) throw error;
		response.status(201).json({name, id: results.rows[0].id});
	});
}

const updateHero = (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	const id = parseInt(request.params.id);
	const {name} = request.body;

	pool.query(
		'UPDATE heroes SET name = $1 WHERE id = $2',
		[name, id],
		(error, results) => {
			if (error) throw error;
			response.status(200).send(`Hero modified with ID: ${id}`);
		}
	);
}

const deleteHero = (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*');
	const id = parseInt(request.params.id);

	pool.query('DELETE FROM heroes WHERE id = $1', [id], (error, results) => {
		if (error) throw error;
		response.status(200).json({method: 'DELETE', id: id});
	});
}

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	getHeroes,
	getHeroesById,
	createHero,
	updateHero,
	deleteHero
}
