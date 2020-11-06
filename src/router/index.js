import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from "vue-router";


import routes from "./router"

import Home from "@/views/Home"
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:()=>import("@/views/login/index")
        },
        {
            path:"/home",
            redirect:"/",
            component:Home,
            children:[
                {
                    path:"/readmap",
                    component:()=>import("@/views/map-management/map")
                },
                {
                    path:"/setup",
                    component:()=>import("@/views/Vue3/setup")
                }
            ]
        },
        {
            path:"/home",
            redirect:"/",
            component:Home,
            children:[
                {
                    path:"/energy",
                    component:()=>import("@/views/About")
                }
            ]
        }
    ]
});
router.beforeEach((to, from, next) => {
    if(to.matched.length == 0){
        
        router.push("/");
        next();
    }
    next();
})
export default router;
