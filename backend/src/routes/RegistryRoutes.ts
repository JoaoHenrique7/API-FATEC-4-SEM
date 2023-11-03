import { Request, Response, Router } from "express";
import { findById } from "../useCases/registry/findById/FindById";

const router = Router();

router.get('/find-by-id', (request: Request, response: Response) => {
    return findById.findById(request, response);
});


export default router;