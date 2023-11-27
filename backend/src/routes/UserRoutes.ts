import { Request, Response, Router } from "express";
import { all } from "../useCases/user/all/All";
import { create } from "../useCases/user/create/Create";
import ICreateDTO from "../useCases/user/create/ICreateDTO";
import { GetOneUser } from "../useCases/user/getOneUser/GetOneUser";
import { Update } from "../useCases/user/update/Update";
import { UpdateEndereco } from "../useCases/user/updateEndereco/UpdateEndereco";

const router = Router();

router.get('/get-all', (request: Request, response: Response) => {
    return all.all(request, response);
});

router.post('/create', (request: Request<ICreateDTO>, response: Response) => {
    return create.create(request, response);
});

router.post('/get-one-user', (request: Request, response: Response) => {
    return GetOneUser.getOneUser(request, response);
});

router.post('/update', (request: Request, response: Response) => {
    return Update.update(request, response);
});

router.post('/update-endereco', (request: Request, response: Response) => {
    return UpdateEndereco.updateEndereco(request, response);
});


export default router;