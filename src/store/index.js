import Vue from 'vue';
import Vuex from 'vuex';
import topicData from './modules/topic'
import replyData from './modules/reply'
import userData from './modules/user'
import oneTopic from './modules/onetopic'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        topicData,
        replyData,
        userData,
        oneTopic
    }
})
