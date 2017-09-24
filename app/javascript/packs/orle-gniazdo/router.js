import * as Vue from 'vue/dist/vue.common';
import VueRouter from 'vue-router';
import Home from './views/home.vue';
Vue.use(VueRouter);

const routes = [
    { path: '/home', component: Home }
];



const router = new VueRouter({
    routes
});

export default router;