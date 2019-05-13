import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: { //改变状态的
        increase() {
            console.log('increase')
            this.state.count++;
        }
    },
    actions: {

    }
})