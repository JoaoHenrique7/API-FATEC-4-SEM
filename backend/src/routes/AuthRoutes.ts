import { Request, Response, Router } from "express";
import { recoveryPass } from '../useCases/auth/RecoveryPass/RecoveryPass';
import { updatePassword } from '../useCases//auth/UpdatePassword/UpdatePassword';
import { login } from "../useCases/auth/login/Login";
import ILoginDTO from "../useCases/auth/login/ILoginDTO";

const router = Router();

router.post('/login', (request: Request<ILoginDTO>, response: Response) => {
    return login.login(request, response);
});

router.post('/recovery', (request: Request, response: Response) => {
    return recoveryPass.recoveryPass(request, response);
});

router.post('/updatePassword', (request: Request, response: Response) => {
    return updatePassword.UpdatePassword(request, response);
});

export default router;