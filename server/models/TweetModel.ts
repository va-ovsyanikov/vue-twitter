import { model, Schema } from 'mongoose';
import { UserModelInterface } from './UserModel';

export interface TweetModelInterface {
    id?: string
    text: string   
    user: UserModelInterface
    likes?: string
    replies?: string
}

const TweetShema = new Schema<TweetModelInterface>({
    text: {
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
},
{
    timestamps:true
})

export const TweetModel = model<TweetModelInterface>('Tweet', TweetShema)