import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Tutorial from '../pages/Tutorial'

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { title: "主页" }
        },
        {
            path: '/tutorial',
            component: Tutorial,
            meta: { title: "教程" }
        },
        {
            path: '/about',
            component: About,
            meta: { title: "关于" }
        }
    ]
})
router.afterEach(to => {
    document.title = to.meta.title || "主页";
})
export default router