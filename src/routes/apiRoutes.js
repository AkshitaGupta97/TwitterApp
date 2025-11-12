
import express from 'express';
//import tweetRouter from './tweet.js';
//import commnetRouter from './comment.js';

import version1Route from './versions/v1Route/version1Route.js';

const router = express.Router();

router.use('/v1', version1Route ); // all routes defined in version1Route will be prefixed with /v1


//router.use('/tweets', tweetRouter); // all routes defined in tweetRouter will be prefixed with /tweets
//router.use('/commnets', commnetRouter); // all routes defined in commentRouter will be prefixed with /comments


export default router;