import { Router } from "express";
import { insertUser, updateUser, getAll, getById, deleteUser } from './Controler/User.js';

const router = Router();

router.get('/getAll', getAll);
router.get('/getById', getById);
router.post('/user', insertUser);
router.put('/updateUser', updateUser);
router.delete('/deleteUser', deleteUser);

export default router;