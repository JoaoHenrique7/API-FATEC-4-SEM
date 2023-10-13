import { Request, Response, Router } from "express";
import { all } from "../useCases/oilTransaction/all/All";
import { create } from "../useCases/oilTransaction/newTransaction/OilTransaction";
import IOilTransactionDTO from "../useCases/oilTransaction/newTransaction/IOilTransactionDTO";

const router = Router();

router.get("/get-all", (request: Request, response: Response) => {
	return all.all(request, response);
});

router.post("/new-transaction", (request: Request<IOilTransactionDTO>, response: Response) => {
	return create.newTransaction(request, response);
});

export default router;
