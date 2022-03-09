import { TweetsStateInterface, TweetInterface, TweetDataInterface, TweetResponseInterface } from '../../types/tweets';
import { NotificationType } from '../../types/auth';
import { fetchTweetAll, fetchTweetOne, addTweet, deleteTweet, updateTweet } from '../../services/tweets.services';
// import { upload } from '../../services/upload.services';

const state: TweetsStateInterface = {
    tweets: [] as TweetInterface[],
    tweet: {} as TweetInterface,
    tweet_edit: {} as TweetInterface,
    loading: false,
    loadingAddTweet: false,
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
    TWEET_DELETE(state: TweetsStateInterface, data: TweetInterface) {
        state.tweets = state.tweets.filter(el => el._id !== data._id)
    },
    TWEET_EDIT(state: TweetsStateInterface, data: TweetInterface) {
        state.tweet_edit = data
    },
    TWEET_UPDATE(state: TweetsStateInterface, data: TweetInterface) {
        const index = state.tweets.findIndex(el => el._id === data._id)
        state.tweets.splice(index, 1, data)
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
    DROPDOWN(state: TweetsStateInterface, data: boolean): void {
        state.isVisibleDropdown = data
    }
}

const actions = {
    async TWEET_FETCH_ALL({ commit }: any): Promise<void> {
        try {
            commit('LOADING', true)
            const response: any = await fetchTweetAll()
            commit('LOADING', false)
            commit('TWEET_FETCH_ALL', response.data as TweetInterface[])
        } catch (error: any) {
            commit('NOTIFICATION', {
                status: error.response.data.status,
                message: error.response.data.message
            })
        }
    },
    async TWEET_FETCH_ONE({ commit }: any, _id: string): Promise<void> {
        try {
            commit('LOADING', true)
            const response = await fetchTweetOne(_id)
            commit('TWEET_FETCH_ONE', response.data as TweetInterface)
            commit('LOADING', false)
        } catch (error: any) {
            commit('NOTIFICATION', {
                status: error.response.data.status,
                message: error.response.data.message
            })
        }
    },
    async TWEET_ADD({ commit }: any, data: string) {
        try {
            commit('LOADING_ADD_TWEET', true)
            const response = await addTweet(data)
            commit('TWEET_ADD', response.data)
            commit('NOTIFICATION', {
                status: response.status,
                message: response.message
            })
            commit('LOADING_ADD_TWEET', false)
        } catch (error: any) {
            commit('NOTIFICATION', {
                status: error.response.data.status,
                message: error.response.data.message
            })
        }
    },
    async TWEET_DELETE({ commit }: any, _id: string) {
        try {
            commit('LOADING', true)
            const response = await deleteTweet(_id)
            commit('TWEET_DELETE', response.data)
            commit('TWEET_EDIT', '')
            commit('NOTIFICATION', {
                status: response.status,
                message: response.message
            })
            commit('LOADING', false)
        } catch (error: any) {
            commit('NOTIFICATION', {
                status: error.response.data.status,
                message: error.response.data.message
            })
        }
    },
    async TWEET_EDIT({ commit }: any, _id: string) {
        try {
            const response = await fetchTweetOne(_id)
            commit('TWEET_EDIT', response.data as TweetInterface)
        } catch (error: any) {
            commit('NOTIFICATION', {
                status: error.response.data.status,
                message: error.response.data.message
            })
        }
    },
    async TWEET_UPDATE({ commit }: any, { _id, message }: TweetDataInterface) {
        try {
            const response: TweetResponseInterface = await updateTweet(_id, message)
            commit('TWEET_UPDATE', response.data as TweetInterface)
            commit('TWEET_EDIT', '')
            commit('NOTIFICATION', {
                status: response.status,
                message: response.message
            })
        } catch (error: any) {
            commit('NOTIFICATION', {
                status: error.response.data.status,
                message: error.response.data.message
            })
        }
    }
}

const getters = {
    TWEETS: (state: TweetsStateInterface): Array<TweetInterface> => state.tweets,
    TWEET: (state: TweetsStateInterface): TweetInterface => state.tweet,
    TWEET_EDIT: (state: TweetsStateInterface): TweetInterface => state.tweet_edit,
    LOADING: (state: TweetsStateInterface): boolean => state.loading,
    LOADING_ADD_TWEET: (state: TweetsStateInterface): boolean => state.loadingAddTweet,
    NOTIFICATION: (state: TweetsStateInterface): NotificationType => state.notifacation,
    IS_VISIBLE_DROPDOWN: (state: TweetsStateInterface): boolean => state.isVisibleDropdown
}

export default {
    state, mutations, actions, getters
}