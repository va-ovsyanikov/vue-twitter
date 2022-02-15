import { Request, Response } from 'express'
import { TweetModel, TweetModelInterface } from '../models/TweetModel'
import { UserModelInterface } from '../models/UserModel'
import { validationResult } from 'express-validator'

class tweetsController {

    async fetchTweets(req: Request, res: Response): Promise<void> {
        try {
            const data = await TweetModel.find().populate('user', '-password -confirmHash -email').sort({ 'createdAt': '-1' }).exec()
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

    async fetchTweet(req: Request, res: Response): Promise<void> {
        try {
            const tweetId = req.params.id

            const tweet = await TweetModel.findById({ _id: tweetId })

            const data = await tweet?.populate('user', '-password -confirmHash -email')

            if (!data) {
                res.status(404).send({
                    status: 'error',
                })
                return
            } else {
                res.status(200).send({
                    status: 'success',
                    data
                })
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                error
            })
        }
    }

    async create(req: any, res: Response): Promise<void> {
        try {
            const user = req.user as UserModelInterface
            if (user) {
                const errors = validationResult(req)
                if (!errors.isEmpty()) {
                    res.status(400).send({
                        status: 'error',
                        message: JSON.stringify(errors.array().map(el => el.msg)),
                    })
                    return
                }
                const tweet: TweetModelInterface = {
                    text: req.body.message,
                    user: user._id as any
                }
                const newTweet = await new TweetModel(tweet).save()

                const data = await newTweet.populate('user', '-password -confirmHash -email')

                res.status(200).send({
                    status: 'success',
                    message: 'Твит добавлен!',
                    data
                })

            } else {
                res.status(400).send({
                    status: 'error',
                    message: 'Ошибка добавления твита',
                })
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'Ошибка'
            })
        }
    }


    async delete(req: Request, res: Response) {
        try {
            //@ts-ignore
            const user = req.user as UserModelInterface
            if (user) {
                const id = req.params.id
                const tweet = await TweetModel.findById(id)
                if (tweet) {
                    if (String(user._id) === String(tweet.user)) {
                        const data = await tweet.remove()
                        res.status(200).send({
                            status: 'error',
                            message: 'Твит удален',
                            data
                        })
                        return
                    }
                } else {
                    res.status(200).send({
                        status: 'error',
                        message: 'Ошибка удаления'
                    })
                }

            } else {
                res.status(400).send({
                    status: 'error',
                    message: 'Ошибка удаления'
                })
            }

        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: 'Ошибка'
            })
        }
    }

    async update(req:Request, res:Response){

    }
}

export default new tweetsController