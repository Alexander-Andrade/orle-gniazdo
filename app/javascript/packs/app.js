import * as Vue from 'vue/dist/vue.common';
import router from './orle-gniazdo/router.js';


document.addEventListener('DOMContentLoaded', () => {
    const app = new Vue({
        el: '#app',
        template: '<router-view></router-view>',
        router,
        components: { }
    });
});