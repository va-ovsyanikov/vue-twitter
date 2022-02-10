import { createStore } from 'vuex'
import tweets from './modules/tweets';
import auth from './modules/auth';
import trends from './modules/trends';


export default createStore({
  modules: {
    tweets,
    auth,
    trends
  },

  // strict: true

})
