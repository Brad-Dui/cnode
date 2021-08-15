import axios from 'axios'
import { checkAddress } from '../../../public/js/methods'
const userData = {
    actions: {
        getUser(context, id) {
            axios.get(`https://cnodejs.org/api/v1/user/${id}`).then(res => {
                let data = res.data.data
                data.avatar_url = checkAddress(data.avatar_url)
                data.create_at = data.create_at.slice(0, 10)
                data.recent_replies.forEach(x => {
                    x.author.avatar_url = checkAddress(x.author.avatar_url)
                });
                data.recent_topics.forEach(x => {
                    x.author.avatar_url = checkAddress(x.author.avatar_url)
                });
                context.commit("GETUSER", res.data.data)
            })
        }
    },
    mutations: {
        GETUSER(state, user) {
            state.user = user
        }
    },
    state: {
        user: []
    }
}
export default userData