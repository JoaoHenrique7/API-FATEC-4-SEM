import { Request, Response, Router } from "express";
import { GetOneRegistry } from "../useCases/registry/getOneRegistry/GetOneRegistry";

const router = Router();

router.post('/get-one-registry', (request: Request, response: Response) => {
    return GetOneRegistry.getOneRegistry(request, response);
});


export default router;