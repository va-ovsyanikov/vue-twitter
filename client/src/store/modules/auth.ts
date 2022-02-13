import { AuthStateInterface, LoginDataInterface, LoginResponseInterface, RegisterDataInterface } from '../../types/auth';
import { login, register } from '../../services/auth.services';
import axios from 'axios';
import router from '../../router';



const state: AuthStateInterface = {
    loadingAuth: false,
    // token: localStorage.getItem("token") || ''
    // token
    // loadingUser
}
const mutations = {
    // LOG_IN(state: AuthStateInterface, data: LoginResponseInterface) {
    //     state.token = data.token
    // },
    LOADING_AUTH(state: AuthStateInterface, data: boolean) {
        state.loadingAuth = data
    }
}

const actions = {
    async REGISTER({ commit }: any, data: RegisterDataInterface) {
        try {
            commit('LOADING_AUTH', true)
            const response = await register(data)
            commit('NOTIFICATION', {
                status: response.status,
                message: response.message
            })
            commit('LOADING_AUTH', false)

        } catch (error: any) {
            commit('NOTIFICATION', {
                status: error.response.data.status,
                message: error.response.data.message
            })
            commit('LOADING_AUTH', false)
        }
    },
    async LOG_IN({ commit }: any, data: LoginDataInterface): Promise<void> {
        try {
            commit('LOADING_AUTH', true)

            const response: LoginResponseInterface = await login(data)

            const token: string = response.token as string

            localStorage.setItem('token', token)

            axios.defaults.headers.common['Authorization'] = token

            // commit('LOG_IN', response.token)

            commit('NOTIFICATION', {
                status: response.status,
                message: response.message
            })

            commit('LOADING_AUTH', false)

            router.go(0)

        } catch (error: any) {
            commit('NOTIFICATION', {
                status: error.response.data.status,
                message: error.response.data.message
            })
            localStorage.removeItem('token')
            
            commit('LOADING_AUTH', false)
        }
    },
    async LOG_OUT({ commit }: any) {
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        router.push('/register')
        commit('NOTIFICATION', {
            status: 'error',
            message: 'Вы вышли'
        })
    }
}
const getters = {
    LOADING_AUTH: (state: AuthStateInterface): boolean => state.loadingAuth,
    // IS_AUTH: (state: AuthStateInterface): boolean => !!state.token
}

export default {
    state, mutations, actions, getters

}