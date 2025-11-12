import express from 'express';
import { createTweet, tweetController, tweetControllerID } from '../../../controllers/tweetController';

const router = express.Router(); // create a new router OBJECT

router.get('/', tweetController)

router.get('/:id', tweetControllerID)

router.post('/', createTweet)

export default router;