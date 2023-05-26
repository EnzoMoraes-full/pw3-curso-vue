import Vue from 'vue';
import axios from 'axios';

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: "https://vueapi-9d49e-default-rtdb.firebaseio.com/",
        })
    }
})