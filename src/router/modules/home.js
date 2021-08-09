import Home from '../../pages/Home'
import All from '../../pages/homepages/All'

const homeRouter = {
    path: '/home',
    component: Home,
    meta: { title: "主页" },
    children: [
        {
            name: "all",
            path: "all/:tab",
            component: All
        },
    ]
}
export default homeRouter