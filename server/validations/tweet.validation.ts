import { check } from 'express-validator';

export const tweetValidation = [
    check('text')
        .trim()
        .notEmpty()
        .withMessage('Поле не должно быть пустым' )
]