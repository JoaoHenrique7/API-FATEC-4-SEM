import OilTransactionRepository from "../../../repositories/implementation/OilTransactionRepository";
import OilTransactionController from "./OilTransactionController";
import OilTransactionUC from "./OilTransactionUC";

export const create = new OilTransactionController(
	new OilTransactionUC(new OilTransactionRepository()),
);
