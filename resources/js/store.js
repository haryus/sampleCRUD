import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    state:{
        session:false,
        userinfo:{},
        logged: [],
    },
    actions:{},
    mutations:{
        setLogged(state, params){
            state.session = true
            state.logged = params.logged
        },
        login(state, payload){
            state.session = true
            state.userinfo = payload
        },
        logout(state){
            state.session = false
            state.userinfo = {}
        },
    },
    getters:{},
    plugins: [createPersistedState()]
});

export default store;
