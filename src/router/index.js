import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/',
         
        },{
            path:"/login",
            component:()=>import("@/views/login/index.vue")
        }
        ,{
            path:"/home",
            component:()=>import("@/views/home/index.vue"),
            children:[
                {
                    path:"/test",
                    component:()=>import("@/views/test/index.vue")
                },
                {
                    path:"/table",
                    name:"表格",
                    component:()=>import("@/views/table/index.vue")
                },
                {
                    path:"/form",
                    name:"表单",
                    component:()=>import("@/views/form/index.vue")
                },
                {
                    path:"/richText",
                    name:"百度富文本",
                    component:()=>import("@/views/richText/index.vue")
                },{
                    path:"/echarts",
                    name:"echarts",
                    component:()=>import("@/views/echarts/index.vue") 
                }
            ]
        }
    ]
})
export default router