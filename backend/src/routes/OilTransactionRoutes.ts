import { Request, Response, Router } from "express";
import { all } from "../useCases/user/all/All";
import { create } from "../useCases/user/oilTransaction/OilTransaction";
import IOilTransactionDTO from "../useCases/user/oilTransaction/IOilTransactionDTO";

const router = Router();

router.post("/new-transaction", (request: Request<IOilTransactionDTO>, response: Response) => {
	return create.newTransaction(request, response);
});

export default router;
