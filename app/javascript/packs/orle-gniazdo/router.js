import * as Vue from 'vue/dist/vue.common';
import VueRouter from 'vue-router';
import Home from './views/home.vue';
Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'Home',component: Home }
];



const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;