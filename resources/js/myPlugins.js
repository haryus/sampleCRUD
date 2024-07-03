import { mapState, mapMutations } from 'vuex'
import store from './store';
import axios from 'axios';

const myPlugins = {
    install(Vue) {
        Vue.mixin({
            data: () => ({
                scheme: {
                    primary: "#390a3f",
                    secondary: "#b89cb7",
                    tertiary: "#c4c4c4",
                    default: "#f5f5f5",
                },

            }),

            computed: {
                ...mapState([
                    'logged',
                ]),

            },

            methods: {
                ...mapMutations([
                    'setlogged',
                ]),
            }
        })
    }
}

export default myPlugins