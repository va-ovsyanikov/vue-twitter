import {UserInterface} from './user';

export interface NotificationType{
    type:String,
    text:String
}
export interface AuthStateInterface{
    loadingAuth: boolean,
    token:string
}
export interface LoginDataInterface{
    email:string
    password:string
}
export interface LoginResponseInterface{
    message:string,
    status:string,
    data:UserInterface 
}
export interface RegisterDataInterface{
    email:string,
    username:string,
    fullname:string,
    password:string
}

