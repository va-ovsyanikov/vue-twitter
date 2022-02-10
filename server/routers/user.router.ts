import express from 'express';
const router = express.Router()
import passport from 'passport';
import userController from '../controllers/user.controller'


router.get('/user',passport.authenticate('jwt', { session: false }), userController.fetchUser)
router.get('/user/verify', userController.verify)

export default router