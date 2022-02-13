import { UserInterface } from '@/types/user'
import {request} from './api.services'

export const fetchUser = ():any => request('get','user')
