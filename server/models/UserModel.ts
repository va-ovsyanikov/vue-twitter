
import { model, Schema } from 'mongoose';

export interface UserModelInterface {
    _id?: string
    email: string;
    fullname: string,
    username: string,
    password: string,
    location?: string,
    confirmed?: boolean,
    confirmHash: string,
    about?: string,
    website?: string
}
const UserSchema = new Schema<UserModelInterface>({
    email: {
        unique: true,
        required: true,
        type: String
    },
    fullname: {
        required: true,
        type: String
    },
    username: {
        unique: true,
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: String
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    confirmHash: {
        required: true,
        type: String
    },
    about: {
        type: String
    },
    website: {
        type: String
    }
}, 
{
    timestamps: true
}
)


export const UserModel = model<UserModelInterface>('User', UserSchema)