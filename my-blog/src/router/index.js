import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', component:()=>import('../views/home/index.vue') },

  { path: '/body', component: ()=>import('../views/body/index.vue'),
    // 重定向
    redirect: '/body/index',
    // 子路由
    children:[
      { path: '/body/index', component: ()=>import('../views/bodyIndex/BodyIndex.vue') },
      { path: '/body/articles', component: ()=>import('../views/Articles/Articles.vue') },
      { path: '/body/mine', component: ()=>import('../views/mine/Mine.vue') },
      { path: '/body/about', component: ()=>import('../views/About/About.vue') },
    ]
   },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;