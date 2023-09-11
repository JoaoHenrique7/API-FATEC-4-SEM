import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

//cors
app.use(cors())

// rotas
import router from './routes/routes.js'
app.use(router);

app.listen( 3000, ()=>console.log("Api Rodando."))
