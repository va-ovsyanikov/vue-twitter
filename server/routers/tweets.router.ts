import express from 'express';
const router = express.Router()
import passport from 'passport';
import { tweetValidation } from '../validations/tweet.validation';
import tweetsController from '../controllers/tweets.controller';


router.get('/tweets', passport.authenticate('jwt', { session: false }), tweetsController.fetchTweets)
router.get('/tweet/:id', passport.authenticate('jwt', { session: false }), tweetsController.fetchTweet)
router.post('/tweet/create', passport.authenticate('jwt', { session: false }), tweetValidation, tweetsController.create)
router.delete('/tweet/delete/:id', passport.authenticate('jwt', { session: false }), tweetsController.delete)
router.patch('/tweet/update/:id', passport.authenticate('jwt', { session: false }),tweetValidation, tweetsController.update)

export default router