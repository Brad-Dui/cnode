//异步 加载组件
// function lazyLoadView(AsyncView) {
//     const AsyncTopic = () => ({
//         component: AsyncView,
//         loading: require("../../components/Loading.vue").default,
//         error: require("../../components/Error.vue").default,
//         delay: 200,
//         timeout: 1000
//     })
//     return Promise.resolve({
//         functional: true,
//         render(h, { data, children }) {
//             return h(AsyncTopic, data, children)
//         },
//     })
// }

const homeRouter = {
    name: "home",
    path: '/home',
    redirect: "/home/introduce",
    component: () => import("../../pages/Home"),
    meta: { title: "主页" },
    children: [
        { path: '/', redirect: 'introduce' },
        {
            name: "all",
            path: "topic",
            component: () => import("../../pages/homepages/All"),
            props(route) {
                return {
                    tab: route.query.tab,
                }
            }
        },
        {
            name: "introduce",
            path: "introduce",
            component: () => import("../../pages/homepages/Introduce")
        }
    ],
}
export default homeRouter