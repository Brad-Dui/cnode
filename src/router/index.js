import VueRouter from 'vue-router'
import homeRouter from './modules/home'
import tutorialRouter from './modules/tutorial'
import aboutRouter from './modules/about'

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home/introduce' },
        homeRouter,
        tutorialRouter,
        aboutRouter
    ]
})
router.afterEach(to => {
    document.title = to.meta.title || "CNode";
})
export default router