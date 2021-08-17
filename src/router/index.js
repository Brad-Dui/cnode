import VueRouter from 'vue-router'
import homeRouter from './modules/home'
import tutorialRouter from './modules/tutorial'
import aboutRouter from './modules/about'
import detailRouter from './modules/detail'
import userRouter from './modules/user'
import nProgress from 'nprogress'

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home/introduce' },
        homeRouter,
        tutorialRouter,
        aboutRouter,
        detailRouter,
        userRouter
    ]
})
router.beforeEach((to, from, next) => {
    nProgress.start()
    next()
})
router.afterEach(to => {
    nProgress.done()
    document.title = to.meta.title || "CNode";
})
export default router