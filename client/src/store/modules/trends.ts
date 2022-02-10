import { fetchTrendsAll } from '../../services/trends.services';
import { TrendsStateType, TrendType } from '../../types/trends';


const state: TrendsStateType = {
    trends: [],
    loading: false
}
const mutations = {
    FETSH_TRENDS_ALL(state:TrendsStateType, data:Array<TrendType>):void{
        state.trends = data
    }
}

const actions = {
    async FETSH_TRENDS_ALL({ commit }: any):Promise<void>{
        try {
            const response = await fetchTrendsAll()
            commit('FETSH_TRENDS_ALL', response)
        } catch (error) {
            console.log(error);
        }
    }
}

const getters = {
        TRENDS: (state:TrendsStateType):Array<TrendType> => state.trends
        
}

export default {
    state, mutations, actions, getters
}

