require('./bootstrap');

import Vue from 'vue'

//Initial vue file
import Sidebar from './views/admin/sidebar.vue';
import Maincontent from './views/admin/content.vue';


const app = new Vue({
    el: '#app',
    components: { Sidebar, Maincontent }
});
