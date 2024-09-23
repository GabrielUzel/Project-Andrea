import Passport from 'passport';
import { Strategy } from 'passport-local';
import { comparePassword } from './middlewares/hashPassword';
import database from './database';

Passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
});

Passport.deserializeUser(async (id: number, done: any) => {
    try {
        const currentUser = await database('users').where({ id });
        done(null, currentUser);
    } catch(error) {
        done(error, null);
    }
});

Passport.use(
    new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email: string, password: string, done: any) => {
        try {
            const currentUser = await database('users').where({ email }).first();

            if(!currentUser) {
                return done(null, false, { message: 'Email inválido'});
            }

            if(!comparePassword(password, currentUser.password)) {
                return done(null, false, { message: 'Senha incorreta'});
            }

            return done(null, currentUser);
        } catch(error) {
            return done(error);   
        }
    })   
);
