import VueRouter from 'vue-router';
import Index from './components/index';


const routes = [
    { path: '/', component: Index }
];



const router = new VueRouter({
    routes
});

export default router;