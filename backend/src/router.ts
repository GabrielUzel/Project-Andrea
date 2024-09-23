import Express from 'express';
import Passport from 'passport';

const router = Express.Router();

router.get('/search/:result?', (request, response) => {
    response.json({
        
    });
});

router.post('/login', Passport.authenticate('local'), (request, response) => { 
    response.json({
        success:true,
    });
});

export default router;