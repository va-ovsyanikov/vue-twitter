import express from 'express';
const router = express.Router()
import authUserController from '../controllers/register.controller'
import {registerValidation} from '../validations/register.validation';


router.post('/register',registerValidation, authUserController.register)


export default router