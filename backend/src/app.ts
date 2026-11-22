import express from 'express'
import morgan from 'morgan'
import { corsConfig } from './config/cors'
import errorHandler from './middlewares/error.middleware'
import authRouter from './routers/auth.router'
import helmet from 'helmet'

const app = express();

//Injeção de dependencias
app.use(morgan('dev'));
app.use(helmet());
app.use(corsConfig);
app.use(express.json());

//Rotas
app.use('/api/auth', authRouter);

//Tratamento global de erros
app.use(errorHandler);

console.log("Dependencias e rotas configuradas.")

export default app

