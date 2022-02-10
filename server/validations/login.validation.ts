import { check } from 'express-validator';

export const loginValidation = [
    check('email')
        .trim()
        .notEmpty()
        .withMessage('Укажите  Email')
        .isEmail()
        .withMessage('Неверный Email'),
    check('password')
        .trim()
        .notEmpty()
        .withMessage('Придумайте пароль')
        .isLength({
            min: 6,
        })
        .withMessage('Количество символов от 6 ')

]