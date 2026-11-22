import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { corsConfig } from './config/cors'
import errorHandler from './middlewares/error.middleware'

const app = express();

app.use(morgan('dev'));

app.use(helmet());

app.use(corsConfig);

app.use(express.json());

app.use(errorHandler);

export default app

