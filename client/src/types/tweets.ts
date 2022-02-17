import { UserInterface } from './user';
import {NotificationType} from './auth';

export interface TweetDataInterface{
    _id:string,
    message:string
}

export interface TweetInterface {
    _id: string
    text: string
    createdAt:string
    updatedAt:string
    data: UserInterface
}
export interface TweetsStateInterface {
    tweets: Array<TweetInterface>
    tweet: TweetInterface
    tweet_edit:TweetInterface
    loading: boolean
    loadingAddTweet:boolean
    notifacation:NotificationType
    isVisibleDropdown:boolean
}