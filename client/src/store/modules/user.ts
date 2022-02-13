import { fetchUser } from '@/services/user.services'
import { UserStateInterface, UserInterface } from '../../types/user'


const state: UserStateInterface = {
    user: {} as UserInterface,
    userLoading: false
}

const mutations = {
    USER_FETCH(state: UserStateInterface, data: UserInterface): void {
        state.user = data
    },
    USER_LOADING(state: UserStateInterface, data: boolean): void {
        state.userLoading = data
    }
}

const actions = {
    async USER_FETCH({ commit }: any) {
        try {
            commit('USER_LOADING', true)
            const response = await fetchUser()
            commit('USER_FETCH', response.data as UserInterface)
            commit('USER_LOADING', false)
        } catch (error) {
            console.log(error)
        }
    }
}

const getters = {
        USER: (state:UserStateInterface ):UserInterface => state.user
}


export default {
    state, actions, mutations, getters
}