
import { createStore } from 'vuex'

export default createStore({
    state: {
        count:0,
        menu:[]
    },
    getters:{
        menu:()=>state.menu
    },
    mutations: {
        add: (state, num) => {
            state.count += num;
        }
    },
    actions: {
        handleAdd({ commit }, num) {
            commit("add", num);
        }
    },
    modules: {}
});
