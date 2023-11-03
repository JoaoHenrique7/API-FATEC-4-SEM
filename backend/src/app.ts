import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import connection from "./database/dbconfig";
import UserRoutes from "./routes/UserRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import OilTransactionRoutes from "./routes/OilTransactionRoutes";
import RegistryRoutes from "./routes/RegistryRoutes";

export const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", UserRoutes);
app.use("/auth", AuthRoutes);
app.use("/oil-transaction", OilTransactionRoutes);
app.use("/registry", RegistryRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).json({ message: err.message });
});

connection
	.sync()
	.then(() => {
		console.log("Database connected.");
	})
	.catch((err) => {
		console.log("Database connection failed.");
		console.log(err);
	});
