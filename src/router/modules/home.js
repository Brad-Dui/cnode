//异步 加载组件
import { lazyLoadView } from '../../../public/js/methods.js'
const AsyncTopic = () => lazyLoadView(import("../../pages/homepages/Topic.vue"))
const homeRouter = {
    name: "home",
    path: '/home',
    redirect: "/home/introduce",
    component: () => import("../../pages/Home"),
    meta: { title: "主页" },
    children: [
        { path: '/', redirect: 'introduce' },
        {
            name: "topic",
            path: "topic",
            component: AsyncTopic,
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