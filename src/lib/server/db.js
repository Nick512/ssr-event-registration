import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Events } from './events.js';
createConnection({
	type: 'mariadb',
	host: process.env.DB_HOST,
	port: 3306,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: 'Events',
	entities: [Events],
	synchronize: false,
	logging: true
})
	.then((connection) => {
		// here you can start to work with your entities
		console.log('Database Connected');
	})
	.catch((error) => console.log(error));
//# sourceMappingURL=db.js.map
