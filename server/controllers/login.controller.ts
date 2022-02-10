import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

class authLoginController {
    async login(req: Request, res: Response): Promise<any> {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).send({
                    status: 'error',
                    message: JSON.stringify(errors.array().map(el => el.msg)),
                })
            } else {
                const candidate = await UserModel.findOne({ email: req.body.email }).exec()
                if (candidate && candidate.confirmed) {
                    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
                    
                    if (passwordResult) {
                        const token = jwt.sign({
                            _id: candidate._id,
                            email: candidate.email
                        }, process.env.JWT_SECRET, { expiresIn: '1h' })
                        const data = {
                            // _id: candidate._id,
                            // email: candidate.email,
                            // fullname: candidate.fullname,
                            // username: candidate.username,
                            token: `Bearer ${token}`
                        }
                        res.status(201).send({
                            status: 'success',
                            message: 'Авторизация прошла успешно!',
                            data
                        })
                        return
                    } else {
                        return res.status(401).send({
                            status: 'error',
                            message: "Неверный пароль"
                        })
                    }
                } else {
                    return res.status(404).send({
                        status: 'error',
                        message: 'Пользователь не существует'
                    })
                }
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'Ошибка сервера'
            })
        }
    }
}

export default new authLoginController