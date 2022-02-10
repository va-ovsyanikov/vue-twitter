import { check } from 'express-validator';

export const tweetValidation = [
    check('message')
        .trim()
        .notEmpty()
        .withMessage('Поле не должно быть пустым' )
]