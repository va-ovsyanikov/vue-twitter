import { Request, Response } from 'express';
import { UserModel } from '../models/UserModel';

class userController {
    async fetchUser(req: Request, res: Response): Promise<any> {
        try {
            const data = await UserModel.find().exec()
            res.status(200).send({
                status: 'success',
                data
            })
        } catch (error) {
            res.status(400).send({
                status: 'error',
                error
            })
        }
    }
    async verify(req: Request, res: Response): Promise<any> {
        try {
            const hash = req.query.hash
            if (!hash) {
                res.status(400).send()
                return
            }
            const user = await UserModel.findOne({ confirmHash: hash }).exec()
            if (user) {
                user.confirmed = true
                user.save()
                res.status(200).send({
                    status: 'success',
                    message: 'Пользователь подтвержден!'
                })
                return
            } else {
                res.status(404).send({
                    status: 'error',
                    message: 'Пользователь не найден :('
                })
                return
            }

        } catch (error) {
            res.status(400).send({
                status: 'error',
                error
            })
        }
    }
}
export default new userController