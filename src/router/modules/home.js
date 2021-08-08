import Home from '../../pages/Home'
import All from '../../pages/homepages/All'
import Ask from '../../pages/homepages/Ask'
import Good from '../../pages/homepages/Good'
import Job from '../../pages/homepages/Job'
import Share from '../../pages/homepages/Share'
import Test from '../../pages/homepages/Test'

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
        {
            name: "ask",
            path: "ask",
            component: Ask
        },
        {
            name: "good",
            path: "good",
            component: Good
        },
        {
            name: "job",
            path: "job",
            component: Job
        },
        {
            name: "share",
            path: "share",
            component: Share
        },
        {
            name: "test",
            path: "test",
            component: Test
        },
    ]
}
export default homeRouter