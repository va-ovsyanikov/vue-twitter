import { createStore } from 'vuex'
import tweets from './modules/tweets';
import auth from './modules/auth';
import trends from './modules/trends';
import user from './modules/user'


export default createStore({
  modules: {
    tweets,
    auth,
    trends,
    user
  },

  // strict: true

})
