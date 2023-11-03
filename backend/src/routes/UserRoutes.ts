import { Request, Response, Router } from "express";
import { all } from "../useCases/user/all/All";
import { create } from "../useCases/user/create/Create";
import ICreateDTO from "../useCases/user/create/ICreateDTO";
import { findById } from "../useCases/user/findUserById/FindUserById";

const router = Router();

router.get('/get-all', (request: Request, response: Response) => {
    return all.all(request, response);
});

router.post('/create', (request: Request<ICreateDTO>, response: Response) => {
    return create.create(request, response);
});

router.get('/find-by-id', (request: Request, response: Response) => {
    return findById.findById(request, response);
});

export default router;