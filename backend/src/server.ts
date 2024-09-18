import Express from 'express';
import Router from './router';
import Dotenv from 'dotenv'; 
import BodyParser from 'body-parser';
import Cors from 'cors';

Dotenv.config();
const app = Express();

app.use(Express.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(Cors());
app.use(Router);

app.listen(process.env.PORT, () => console.log('Server opened...'));