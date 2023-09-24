import { Sequelize } from "sequelize-typescript";

const connection = new Sequelize({
	dialect: 'sqlite',
	storage: './api4sem.sqlite',
	models: [__dirname + '/models'],
});

export default connection;