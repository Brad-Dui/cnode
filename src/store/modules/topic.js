import axios from 'axios';
const topicData = {
    actions: {
        getTopic(context, value) {
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${value[0]}&page=${value[1]}`).then(res => {
                // 部分头像链接 通过镜像网站访问
                res.data.data.forEach(x => {
                    if (x.author.avatar_url.startsWith("//gravatar")) {
                        x.author.avatar_url = x.author.avatar_url.replace(".com", ".zeruns.tech")
                    }
                });
                context.commit('GETTOPIC', res.data.data)
            }).catch(err => {
                if (err.message == "Network Error") {
                    alert("请求失败，请检查网络")
                }
            })
        }
    },
    mutations: {
        GETTOPIC(state, value) {
            state.topic = value
        }
    },
    state: {
        topic: []
    },
}
export default topicData