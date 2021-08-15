import axios from "axios";
const oneTopic = {
    actions: {
        getOneTopic(context, id) {
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res => {
                // res.data.data.replies.forEach(x => {
                //     if (x.author.avatar_url.startsWith("//gravatar")) {
                //         x.author.avatar_url = x.author.avatar_url.replace(".com", ".zeruns.tech")
                //     }
                // });
                context.commit("GETONETOPIC", res.data.data)
            }).catch(err => {
                console.log(err.message);
            })
        }
    },
    mutations: {
        GETONETOPIC(state, topic) {
            state.topic = topic
        }
    },
    state: {
        topic: []
    }
}
export default oneTopic