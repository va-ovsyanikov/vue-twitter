import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { UserModelInterface, UserModel } from '../models/UserModel';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';

class authUserController {
    async register(req: Request, res: Response): Promise<any> {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.status(400).send({
                    status: 'error',
                    message: JSON.stringify(errors.array().map(el => el.msg)),
                })
                return
            } else {
                const candidate = await UserModel.findOne({ email: req.body.email })
                if (candidate) {
                    return res.status(409).send({
                        status: 'error',
                        message: 'Пользователь с таким email существует'
                    })
                } else {
                    const salt = bcrypt.genSaltSync(10);

                    const newUser: UserModelInterface = {
                        email: req.body.email,
                        fullname: req.body.fullname,
                        username: req.body.username,
                        password: bcrypt.hashSync(req.body.password, salt),
                        confirmHash: bcrypt.hashSync(process.env.KEY_SECRET, salt)
                    }
                    await new UserModel(newUser).save()
                    let transporter = nodemailer.createTransport({
                        //@ts-ignore
                        host: process.env.NODEMAILER_HOST,
                        port: process.env.NODEMAILER_PORT,
                        secure: true,
                        auth: {
                            user: process.env.NODEMAILER_USER,
                            pass: process.env.NODEMAILER_PASS,
                        },
                    });
                    let msg = {
                        from: '"Fred Foo 👻" <foo@example.com>',
                        to: req.body.email,
                        subject: 'Подтверждение почты TWITTER ✔👻',
                        html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:${process.env.PORT}/user/verify/?hash=${newUser.confirmHash}">По этой ссылке</a>`, // html body
                    }
                    transporter.sendMail(msg, (err: Error | null) => {
                        if (err) {
                            res.status(401).send({
                                status: 'error',
                                message: JSON.stringify(err),
                            })
                            return
                        } else {
                            res.status(200).send({
                                status: 'success',
                                message: 'Пользователь успешно зарегистрирован!  Для подтверждения перейдите в свою почту'
                            })
                            return
                        }
                    });
                }
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                error
            })
        }

    }
}
export default new authUserController