import Vue from 'vue';
import Vuex from 'vuex';
import topicData from './modules/topic'
import replyData from './modules/reply'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        topicData,
        replyData
    }
})
