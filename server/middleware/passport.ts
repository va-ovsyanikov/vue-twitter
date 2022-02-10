const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
import { UserModelInterface,  UserModel} from '../models/UserModel';


var options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

export const passportJwt = (passport:any ):void => {
    passport.use(
        new JwtStrategy(options, async (payload: UserModelInterface, done:any):Promise<void> => {
            try {
                const user = await UserModel.findById({_id:payload._id }).select('email _id')
                if (user) {
                    return done(null, user)
                } else {
                    return done(null, false)
                }
            } catch (error) {
                done(error)
            }
        }))
};