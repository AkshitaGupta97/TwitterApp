import express from 'express';

const router = express.Router(); // create a new router OBJECT

router.get('/', (req,res) => {
    return res.json({
        message: "This is the comment route",
        commemts: 'comments will be shown here'
    })
})

router.get('/:id', (req, res) => {
    return res.json({
        message: `fetching comment with id ${req.params.id}`,
        commnets: 'specific comment will be shown here'
    })
})

export default router;