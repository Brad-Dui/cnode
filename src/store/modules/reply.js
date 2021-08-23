import axios from "axios";
import checkAddress from '../../../public/js/methods'
const replyData = {
    actions: {
        getReply(context, id) {
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res => {
                res.data.data.replies.forEach(x => {
                    x.author.avatar_url = checkAddress(x.author.avatar_url)
                });
                context.commit("GETREPLY", res.data.data.replies)
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