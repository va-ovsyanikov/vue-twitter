import dotenv from 'dotenv';
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import routerRegister from './routers/register.router'
import routerLogin from './routers/login.router'
import routerTweet from './routers/tweets.router'
import routerUser from './routers/user.router'
import passport from 'passport'
import { passportJwt } from './middleware/passport'

import './types/types'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


mongoose.connect(process.env.DB_URL, err => {
    if (!err) {
        console.log('Connect DB');
        app.listen(process.env.PORT || 7777, () => {
            return console.log(`Server connect http://localhost:${process.env.PORT}`)
        });
    } else {
        console.log('No connect DB')
    }
})

app.use(passport.initialize())
passportJwt(passport)


app.use(routerRegister)
app.use(routerLogin)
app.use(routerTweet)
app.use(routerUser)