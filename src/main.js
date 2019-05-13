import Vue from 'vue'
import routes from './router'
import store from './store'
import './utils/rem'
import VueRouter from 'vue-router';
import './style/reset.styl'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

new Vue({
    router,
    store
}).$mount('#app')