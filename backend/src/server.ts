import { app } from "./app";

const server = app.listen(3001, () => console.log(`Server is running on http://localhost:3001`));

process.on('SIGINT', () => {
	console.log('Closing server...');
	server.close();
	console.log('Server closed.');
});