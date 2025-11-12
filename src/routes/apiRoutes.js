
import express from 'express';
//import tweetRouter from './tweet.js';
//import commnetRouter from './comment.js';

import version1Route from './versions/v1Route/version1Route.js';
import version2Route from './versions/v2Route/version2Route.js'
const router = express.Router();

router.use('/v1', version1Route ); // all routes defined in version1Route will be prefixed with /v1

router.use('/v2', version2Route ); // all routes defined in version2Route will be prefixed with /v2
//router.use('/tweets', tweetRouter); // all routes defined in tweetRouter will be prefixed with /tweets
//router.use('/commnets', commnetRouter); // all routes defined in commentRouter will be prefixed with /comments


export default router;