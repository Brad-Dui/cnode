import axios from 'axios';
const topicData = {
    actions: {
        getTopic(context, value) {
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${value}`).then(res => {
                context.commit('GETTOPIC', res.data)
                console.log("根据" + value + "请求的数据", context.state)
            }).catch(err => {
                console.log(err.message)
            })
        }
    },
    mutations: {
        GETTOPIC(state, value) {
            state.topic = value.data
        }
    },
    state: {
        topic: []
    },
}
export default topicData