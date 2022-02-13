import {request} from './api.services';
import {TweetInterface} from '../types/tweets';

export const fetchTweetAll = ():Promise<void> => request('get', 'tweets');
export const fetchTweetOne = (_id:String):Promise<any>  => request('get', `tweet/${_id}` );
export const addTweet = (data:String)=> request('post', 'tweet/create', data );
export const deleteTweet = (_id:String):Promise<any> => request('delete', `tweet/delete/${_id}`)


