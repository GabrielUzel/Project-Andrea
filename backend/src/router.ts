import Express from 'express';
const router = Express.Router();

router.get('/search/:result?', (request, response) => {
    console.log(request.params);
});

export default router;