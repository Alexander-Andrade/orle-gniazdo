import Vue from 'vue';
import App from './components/app.vue';
import router from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(document.createElement('hello'))
    const app = new Vue(App).$mount('hello')

    console.log(app)
})
console.log(VueRouter);
console.log(router);