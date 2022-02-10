import {request} from './api.services';
import {LoginDataInterface, LoginResponseInterface, RegisterDataInterface} from '../types/auth';


export const login = (data:LoginDataInterface):Promise<LoginResponseInterface> => request('post', 'login', data )
export const register = (data:RegisterDataInterface):Promise<any> => request('post', 'register', data)
