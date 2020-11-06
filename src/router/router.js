/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: () => import("@/views/login/index")
  },
  {
    path: "/login",
    component: () => import("@/views/login/index")
  },
  {
    path: "/",
    component: Home,
    meta: {
      name: "首页",
      icon: ""
    },
    redirect: "/setup",
    title: "首页",
    children: [
      {
        path: "/setup",
        title: "setup",
        component: () => import("@/views/Vue3/setup")
      }
    ]
  },
  {
    path: "/readmap",
    component: Home,
    children: [
      {
        path: "/readmap",
        component: () => import("@/views/map-management/map.vue")
      },
      {
        path: "/info",
        component: () => import("@/views/Vue3/setup")
      }
    ]
  },
  {
    path: "/energy",
    component: Home,
    children: [
      {
        path: "/energy",
        component: () => import("@/views/Vue3/setup")
      }
    ]
  },
  //     {
  //         path: "/about",
  //         name: "About",
  //         isHidden: false,
  //         meta: {
  //             name: "关于",
  //             icon: ""
  //         },
  //         component: Home,
  //         isTitle:false,
  //         children: [
  //             {
  //                 path: "/about",
  //                 component: () => import("../views/About.vue")
  //             }
  //         ]
  //     },
  //     {
  //         path: "/demo",
  //         name: "Demo",
  //         isHidden: true,
  //         meta: {
  //             name: "demo",
  //             icon: ""
  //         },
  //         component: () => import("../views/Demo.vue")
  //     },
  //     {
  //         path: "/todolist",
  //         name: "Todolist",
  //         isHidden: true,
  //         meta: {
  //             name: "Todolist",
  //             icon: ""
  //         },
  //         component: () => import("../views/TodoList.vue")
  //     },
  {
    path: "",
    redirect: "/"
  }
];
export default routes;
