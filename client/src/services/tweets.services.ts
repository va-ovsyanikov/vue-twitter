import {request} from './api.services';
import {TweetInterface} from '../types/tweets';

export const fetchTweetAll = ():Promise<void> => request('get', 'tweets');
export const fetchTweetOne = (_id:string):Promise<any>  => request('get', `tweet/${_id}` );
export const addTweet = (data:string) => request('post', 'tweet/create', data );
export const deleteTweet = (_id:string):Promise<any> => request('delete', `tweet/delete/${_id}`)
export const updateTweet = (_id:string, message:string) => request('put', `tweet/update/${_id}`, {message, _id})


