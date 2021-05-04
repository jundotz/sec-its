require('./bootstrap');

import Vue from 'vue'
import Sidebar from './views/Sidebar.vue'
import router from './routes'
import store from './store'
// import axios from 'axios';


const app = new Vue({
    el: '#app',
    components: { Sidebar },
    router,
    store
    // data() {
    //     return {
    //         userRole: null
    //     }
    // },
    // mounted() {
    //    this.getUser();
    // },
    // methods: {
    //     // refactor this to vuex!!
    //     async getUser() {
    //         await axios.get('api/user/role')
    //             .then((ret)=>{
    //                 this.userRole = ret.data[0].name;
    //             })
    //     }
    // },
});
