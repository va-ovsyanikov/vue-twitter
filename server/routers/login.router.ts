import express from 'express';
const router = express.Router()
import authLoginController  from '../controllers/login.controller';
import {loginValidation} from '../validations/login.validation';

router.post('/login',loginValidation, authLoginController.login)


export default router