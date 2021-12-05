const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
	//cada vez que esta en false, se borra mi BS y se regenera. Cuando no tengo que cambiarlo más, PONERLO EN FALSE. Antes de subirlo al repo, ponerlo en false.
	server.listen(3001, () => {
		console.log('🦖 listening at 3001 🦖'); // eslint-disable-line no-console
	});
});