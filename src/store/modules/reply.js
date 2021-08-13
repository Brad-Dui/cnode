import axios from "axios";
const replyData = {
    actions: {
        getReply(context, id) {
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res => {
                context.commit("GETREPLY", res.data.data.replies)
                console.log(res.data.data.replies);
            }).catch(err => {
                console.log(err.message);
            })
        }
    },
    mutations: {
        GETREPLY(state, reply) {
            state.reply = reply
        }
    },
    state: {
        reply: []
    }
}
export default replyData