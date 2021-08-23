import axios from "axios";
const oneTopic = {
    actions: {
        getOneTopic(context, id) {
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res => {
                context.commit("GETONETOPIC", res.data.data)
            }).then(() => {
                context.state.tag = true
            })
                .catch(err => {
                    console.log(err.message);
                })
        }
    },
    mutations: {
        GETONETOPIC(state, topic) {
            state.onetopic = topic
        }
    },
    state: {
        onetopic: [],
        tag: false
    },
    getters: {
        onetopic(state) {
            return state.onetopic
        }
    }
}
export default oneTopic