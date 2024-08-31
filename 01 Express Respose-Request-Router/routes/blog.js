import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! Blog');
});

router.get('/:slug', (req, res) => {
    res.send(`Hello ${req.params.slug}`)
});


router.post('/', (req, res) => {
    res.send(`Hello ${req.params.slug}`)
    console.log("Post Request")
})/*router*/.put('/', (req, res) => {
    res.send(`put Request`)
    console.log("put Request")
});





export default router;