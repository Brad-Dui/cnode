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
                console.log("根据" + value[0] + value[1] + "请求的数据", context.state)
                context.commit('GETTOPIC', res.data.data)
            }).catch(err => {
                console.log(err.message)
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