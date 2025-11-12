
import express from 'express';
import tweetRouter from './tweet.js';
import commnetRouter from './comment.js';

const router = express.Router();

router.use('/tweets', tweetRouter); // all routes defined in tweetRouter will be prefixed with /tweets
router.use('/comments', commnetRouter); // all routes defined in commentRouter will be prefixed with /comments


export default router;