import express from 'express';
import { createTweet, tweetController, tweetControllerID } from '../../../controllers/tweetController.js';
//import { createTweetManualValidator } from '../../../validations/tweetManualValidator.js';
import zodValidator from '../../../validations/zodValidator.js';
import { tweetZodSchema } from '../../../validations/tweetZodSchema.js.js';

const router = express.Router(); // create a new router OBJECT

router.get('/', tweetController)

router.get('/:id', tweetControllerID)

//router.post('/create', createTweetManualValidator, createTweet) or for auto-validation
router.post('/create', zodValidator(tweetZodSchema), createTweet )

export default router;