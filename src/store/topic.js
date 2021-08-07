import axios from 'axios';
const topicData = {
    namespaced: true,
    actions: {
        getTopic() {
            axios.get('https://cnodejs.org/api/v1/topics').then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err.message)
            })
        }
    },
    mutations: {},
    state: {},
}
export default topicData