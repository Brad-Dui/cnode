import Vue from 'vue';
import Vuex from 'vuex';
import topicData from './modules/topic'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        topicData,
    }
})
