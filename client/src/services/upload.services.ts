import {request} from './api.services';


export const upload = (data:any)=> request('post', '/upload', data)