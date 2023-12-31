import { Request, Response, Router } from "express";
import { GetOneRegistry } from "../useCases/registry/getOneRegistry/GetOneRegistry";
import { UpdateOilValueById } from "../useCases/registry/updateOilValueById/UpdateOilValueById";
import { all } from "../useCases/registry/all/All";
import { UpdateOilQuotationById } from "../useCases/registry/updateOilQuotationById/UpdateOilQuotationById";

const router = Router();

router.get("/get-all", (request: Request, response: Response) => {
	return all.all(request, response);
});

router.post("/get-one-registry", (request: Request, response: Response) => {
	return GetOneRegistry.getOneRegistry(request, response);
});

router.post("/update-oil-by-id", (request: Request, response: Response) => {
	return UpdateOilValueById.updateOilValueById(request, response);
});

router.post("/update-quotation-by-id", (request: Request, response: Response) => {
	return UpdateOilQuotationById.updateOilQuotationById(request, response);
});

export default router;
