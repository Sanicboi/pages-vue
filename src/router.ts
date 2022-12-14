import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    routes: [
        {
            name: 'index',
            path: '/',
            component: () => import('./views/index.vue')
        }
    ],
    history: createWebHistory('/pages-vue')
})

export default router;