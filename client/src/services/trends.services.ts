import {request} from './api.services';
import  {TrendType} from '../types/trends';

export const fetchTrendsAll = (): Promise<Array<TrendType>> => request('get', 'trends');