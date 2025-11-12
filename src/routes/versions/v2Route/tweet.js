import express from 'express';
//import { createTweet, tweetController, tweetControllerID } from '../../../controllers/tweetController';

const router = express.Router(); // create a new router OBJECT

router.get('/', (req,res) => {
    return res.json({
        message:'you came in tweet route of version2 ',
        version2: 'welcome to version2 route '
    })
})

router.get('/:id', (req,res) => {
    return res.json({
        message: `fetching tweet with id ${req.params.id} from version2`
    })
})


export default router;