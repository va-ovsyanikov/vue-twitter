import { check } from 'express-validator';

export const registerValidation = [
    check('email')
        .trim()
        .notEmpty()
        .withMessage('Укажите  Email')
        .isEmail()
        .withMessage('Неверный Email'),
    check('fullname')
        .trim()
        .notEmpty()
        .withMessage('Укажите полное имя')
        .isLength({
            min: 2,
            max: 40
        })
        .withMessage('Количество символов от 2 до 40'),
    check('username')
        .trim()
        .notEmpty()
        .withMessage('Укажите логин')
        .isLength({
            min: 2,
            max: 30
        })
        .withMessage('Количество символов от 2 до 40'),
    check('password')
        .trim()
        .notEmpty()
        .withMessage('Придумайте пароль')
        .isLength({
            min: 6,
        })
        .withMessage('Количество символов от 6 ')
        // .custom((value, {req})=>{
        //     if(value !== req.body.password2){
        //         throw new Error('Пароли не совпадают')
        //     }else{
        //         return value
        //     }
        // })
]