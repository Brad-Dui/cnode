import Home from '../../pages/Home'
import All from '../../pages/homepages/All'

const homeRouter = {
    path: '/home',
    component: Home,
    meta: { title: "主页" },
    children: [
        {
            name: "all",
            path: "topic",
            component: All,
            props(route) {
                return {
                    tab: route.query.tab,
                }
            }
        },
    ]
}
export default homeRouter