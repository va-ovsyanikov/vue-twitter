import { TweetsStateInterface, TweetInterface } from '../../types/tweets';
import {NotificationType} from '../../types/auth';
import { fetchTweetAll, fetchTweetOne, addTweet, deleteTweet } from '../../services/tweets.services';
import {upload} from '../../services/upload.services';

const state: TweetsStateInterface = {
    tweets: [] as TweetInterface[],
    tweet: {} as TweetInterface,
    loading: false,
    loadingAddTweet:false,
    notifacation: {} as NotificationType,
    isVisibleDropdown: false
    // loadingTweets
}

const mutations = {
    TWEET_FETCH_ALL(state: TweetsStateInterface, data: Array<TweetInterface>): void {
        state.tweets = data
    },
    TWEET_FETCH_ONE(state: TweetsStateInterface, data: TweetInterface): void {
        state.tweet = data
    },
    TWEET_ADD(state: TweetsStateInterface, data: TweetInterface): void {
      state.tweets.splice(0, 0, data)
    },
    TWEET_DELETE(state: TweetsStateInterface,data: TweetInterface){
        console.log(data)
        state.tweets = state.tweets.filter(el => el._id !== data._id)
         console.log( state.tweets)
    },
    NOTIFICATION(state: TweetsStateInterface, data: NotificationType): void {
        state.notifacation = data
    },
    LOADING(state: TweetsStateInterface, data: boolean): void {
        state.loading = data
    },
    LOADING_ADD_TWEET(state: TweetsStateInterface, data: boolean): void {
        state.loadingAddTweet = data
    },
    IS_VISIBLE_DROPDOWN(state: TweetsStateInterface, data:boolean):void{
        state.isVisibleDropdown = data
    }
}

const actions = {
    async TWEET_FETCH_ALL({ commit }: any): Promise<void> {
        try {
            commit('LOADING', true)
            const response:any = await fetchTweetAll()
            console.log(response);
            commit('LOADING', false)
            commit('TWEET_FETCH_ALL', response.data)
        } catch (error) {
            console.log(error);
        }
    },
    async TWEET_FETCH_ONE({ commit }: any, _id: String): Promise<void> {
        try {
            commit('LOADING', true)
            const response = await fetchTweetOne(_id)
            commit('TWEET_FETCH_ONE', response.data)
            commit('LOADING', false)
        } catch (error) {
            console.log(error);
        }
    },
    async TWEET_ADD({ commit }: any, data: String) {
        try {
          
            commit('LOADING_ADD_TWEET', true)
            const response = await addTweet(data)
            console.log(response)
            commit('TWEET_ADD', response.data)
            commit('NOTIFICATION', {
                status: 'success',
                message: 'Твит добавлен!'
            })
            commit('LOADING_ADD_TWEET', false)

        } catch (e) {
            commit('NOTIFICATION', {
                status: 'error',
                message: 'Ошибка! Твит не добавлен :('
            })
        }
    },
   async TWEET_DELETE({commit}:any, _id:String){
          try {
            commit('LOADING', true)
            const response = await deleteTweet(_id)
            console.log(response.data)
            commit('TWEET_DELETE', response.data)
            commit('NOTIFICATION', {
                status: 'success',
                message: 'Твит удален!'
            })
            commit('LOADING', false)
          } catch (error) {
            commit('NOTIFICATION', {
                status: 'error',
                message: 'Ошибка удаления'
            })
          }
    }
}


const getters = {
    TWEETS: (state: TweetsStateInterface): Array<TweetInterface> => state.tweets,
    LOADING: (state: TweetsStateInterface): boolean => state.loading,
    LOADING_ADD_TWEET: (state: TweetsStateInterface): boolean => state.loadingAddTweet,
    TWEET: (state: TweetsStateInterface): TweetInterface => state.tweet,
    NOTIFICATION: (state: TweetsStateInterface): NotificationType => state.notifacation,
    IS_VISIBLE_DROPDOWN:(state: TweetsStateInterface):boolean => state.isVisibleDropdown
}

export default {
    state, mutations, actions, getters
}