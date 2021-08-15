const userRouter = {
    name: "user",
    path: "/user",
    component: () => import("../../pages/User")
}
export default userRouter