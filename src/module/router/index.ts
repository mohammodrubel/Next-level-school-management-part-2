import {Router} from 'express'
import student_router from '../student/student_router'
import user_router from '../users/user_router'
import academic_semister from '../academic_semester/academic_semester_router'
const router = Router()

    const myRouter = [
        {path:'/users',routes:user_router},
        {path:'/users',routes:student_router},
        {path:'/create-acedemic',routes:academic_semister},
    ]

myRouter.forEach((route)=> router.use(route.path,route.routes))



export default router 