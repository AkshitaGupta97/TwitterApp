
import express from 'express';
import tweetRouter from './tweet.js';

const router = express.Router();

router.use('/tweets', tweetRouter); // all routes defined in tweetRouter will be prefixed with /tweets