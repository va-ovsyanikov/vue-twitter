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

            const data = await tweet!.populate('user', '-password -confirmHash -email')

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
                    text: req.body.text,
                    user: user._id as any
                }
                const newTweet = await new TweetModel(tweet).save()

                const data = await newTweet.populate('user', '-password -confirmHash -email')

                res.status(200).send({
                    status: 'success',
                    message: '???????? ????????????????!',
                    data
                })

            } else {
                res.status(400).send({
                    status: 'error',
                    message: '???????????? ???????????????????? ??????????',
                })
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: '????????????'
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
                            message: '???????? ????????????',
                            data
                        })
                        return
                    }
                } else {
                    res.status(200).send({
                        status: 'error',
                        message: '???????????? ????????????????'
                    })
                }
            } else {
                res.status(400).send({
                    status: 'error',
                    message: '???????????? ????????????????'
                })
            }
        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: '????????????'
            })
        }
    }
    async update(req: any, res: Response) {
        try {
            const text: any = req.body.text
            const _id = req.params.id
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.status(400).send({
                    status: 'error',
                    message: JSON.stringify(errors.array().map(el => el.msg)),
                })
                return
            } else {
                const updateTweet = await TweetModel.findByIdAndUpdate(_id, { text: text }, { new: true })
                const data = await updateTweet!.populate('user', '-password -confirmHash -email')

                res.status(200).send({
                    status: 'success',
                    message: '???????? ????????????????',
                    data
                })
            }



            //             const user = req.user as UserModelInterface
            //             if (user) {
            //                 const text: any = req.body.text
            //                 const _id = req.params.id
            //                 const tweet = await TweetModel.findById(_id)
            //                 if (tweet) {
            //                     console.log(tweet)
            //                     if (String(user._id) === String(tweet.user)) {
            //                         tweet.text = text
            //                         const updateTweet = await new TweetModel(tweet).save()
            //                        const data = await updateTweet.populate('user', '-password -confirmHash -email')
            // console.log(data)
            //                         res.status(200).send({
            //                             status: 'success',
            //                             message: '???????? ????????????????',
            //                             data
            //                         })
            //                     }
            //                 }
            //             } else {
            //                 res.status(404).send({
            //                     status: 'error',
            //                     message: '???????????????????????? ???? ????????????'
            //                 })
            //             }

        } catch (error) {
            res.status(500).send({
                status: 'error',
                message: '????????????'
            })
        }
    }
}

export default new tweetsController