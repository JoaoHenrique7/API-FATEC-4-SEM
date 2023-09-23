import { Request, Response, Router } from "express";
import { createPartner } from '../useCases/user/CreatePartner/CreatePartner';
import { createCompany } from '../useCases/user/CreateCompany/CreateCompany';
import { createIndividual } from '../useCases/user/CreateIndividual/CreateIndividual';
import { getAllUsers } from "../useCases/user/GetAllUsers/GetAllUsers";
import { createAdmin } from "../useCases/user/CreateAdmin/CreateAdmin";

const router = Router();

router.get('/getAll', (request: Request, response: Response) => {
    return getAllUsers.getAllUsers(request, response);
});

router.post('/createAdmin', (request: Request, response: Response) => {
    return createAdmin.create(request, response);
});

router.post('/createPartner', (request: Request, response: Response) => {
    return createPartner.create(request, response);
});

router.post('/createCompany', (request: Request, response: Response) => {
    return createCompany.create(request, response);
});

router.post('/createIndividual', (request: Request, response: Response) => {
    return createIndividual.create(request, response);
});

// router.post('/editUser', (request: Request, response: Response) => {
//     return editUser.edit(request, response);
// });

// router.delete('/deleteUser', (request: Request, response: Response) => {
//     return deleteUser.delete(request, response);
// });

// router.get('/findById', (request: Request, response: Response) => {
//     return findById.findById(request, response);
// });

// router.post('/findUserByEmail', (request: Request, response: Response) => {
//     return findUserByEmail.findUserByEmail(request, response);
// });

// router.get('/findUserByCpf', (request: Request, response: Response) => {
//     return findUserByCpf.findUserByCpf(request, response);
// });

// router.get('/findUserByUserName', (request: Request, response: Response) => {
//     return findUserByUserName.findUserByUserName(request, response);
// });

// router.get('/findUserByFullName', (request: Request, response: Response) => {
//     return findUserByFullName.findUserByFullName(request, response);
// });

// router.post('/findByActive', (request: Request, response: Response) => {
//     return findByActive.findByActive(request, response);
// });

// router.get('/findByCreatedAt', (request: Request, response: Response) => {
//     return findByCreatedAt.findByCreatedAt(request, response);
// });

// router.post('/changeAcess', (request: Request, response: Response) => {
//     return changeAcess.ChangeAcess(request, response);
// });

export default router;