require('./bootstrap');

import Vue from 'vue'
import Sidebar from './views/admin/sidebar.vue'
import router from './routes'

const app = new Vue({
    el: '#app',
    components: { Sidebar },
    router
});
