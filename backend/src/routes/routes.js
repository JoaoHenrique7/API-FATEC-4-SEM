import { Router } from "express";
import { createTable, } from './Controler/User.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

router.delete('/createTable', createTable);

export default router;