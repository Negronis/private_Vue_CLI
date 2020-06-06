import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/index.vue';
import About from '@/views/about/index.vue';
const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]
Vue.use(VueRouter);
const router = new VueRouter({
    routes
})

export default router;
