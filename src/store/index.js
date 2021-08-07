import Vue from 'vue';
import Vuex from 'vuex';
import topicData from './topic'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        topicData,
    }
})
