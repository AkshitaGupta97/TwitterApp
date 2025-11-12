
import express from 'express';

const router = express.Router(); // create a new router OBJECT

router.get('/', (req,res) => {
    return res.json({
        message: "This is the tweet route"
    })
})

router.get('/:id', (req,res) => {
    return res.json({
        message: `fetching tweet with id ${req.params.id}`
    })
})



export default router;