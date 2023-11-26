import { Request, Response, Router } from "express";
import { GetOneRegistry } from "../useCases/registry/getOneRegistry/GetOneRegistry";
import { UpdateOilValueById } from "../useCases/registry/updateOilValueById/UpdateOilValueById";

const router = Router();

router.post("/get-one-registry", (request: Request, response: Response) => {
	return GetOneRegistry.getOneRegistry(request, response);
});

router.post("/update-oil-by-id", (request: Request, response: Response) => {
	return UpdateOilValueById.updateOilValueById(request, response);
});

export default router;
