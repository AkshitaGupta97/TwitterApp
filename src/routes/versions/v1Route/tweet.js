import express from 'express';
import { createTweet, tweetController, tweetControllerID } from '../../../controllers/tweetController.js';
import { createTweetManualValidator } from '../../../validations/tweetManualValidator.js';

const router = express.Router(); // create a new router OBJECT

router.get('/', tweetController)

router.get('/:id', tweetControllerID)

router.post('/', createTweetManualValidator, createTweet)

export default router;