require('./bootstrap');

import Vue from 'vue'
import Sidebar from './views/Sidebar.vue'
import router from './routes'
import axios from 'axios';

const app = new Vue({
    el: '#app',
    components: { Sidebar },
    router,
    data() {
        return {
            userRole: null
        }
    },
    mounted() {
       this.getUser()
    },
    methods: {
        async getUser() {
            await axios.get('api/user')
                .then((ret)=>{
                    console.log(ret.data);
                })
        }
    },
});
