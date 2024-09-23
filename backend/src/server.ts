import Express from 'express';
import Router from './router';
import Dotenv from 'dotenv'; 
import Cors from 'cors';
import Passport from 'passport';
import Session from 'express-session';
import Mysql from 'mysql2';
import Path from 'path';
import './loginSettings';
const MySQLStore = require('express-mysql-session')(Session);

Dotenv.config({ path: Path.resolve(__dirname, '..', '.env') });
const app = Express();

const config = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const connection = Mysql.createConnection(config);
const sessionStore = new MySQLStore(config, connection);

app.use(Session({
    secret: process.env.SESSIONSECRET as string,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 2,
        httpOnly: true
    }
}));

app.use(Express.json());
app.use(Cors());
app.use(Passport.initialize());
app.use(Passport.session());
app.use(Router);

app.listen(process.env.PORT, () => console.log('Server opened...'));