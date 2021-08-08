import axios from 'axios';
const topicData = {
    actions: {
        getTopic(context) {
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${"ask"}&page=${2}`).then(res => {
                context.commit('GETTOPIC', res.data)
                console.log(context.state)
            }).catch(err => {
                console.log(err.message)
            })
        }
    },
    mutations: {
        GETTOPIC(state, value) {
            state.topic.all = value.data
        }
    },
    state: {
        topic: {
            all: [],
            good: [],

        }
    },
}
export default topicData