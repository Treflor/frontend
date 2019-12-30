import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        recipes: [],
        apiUrl: 'https://api.edamam.com/search',

        hikez: [
            {img: 'https://www.srilankatravelandtourism.com/places-sri-lanka/ella/ella-images/ella-1-sri-lanka.jpg', id: '1111', title: 'Ella', height: '618m'},
            {img: 'https://www.tripsavvy.com/thmb/dAjVDb033cOIBYtAC3Y_S7Ld5p8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/hikinginspain-f7d12abd58584697ae354500d31ee07f.jpg', id: '2222', title: 'Bible Rock', height: '418m'},
            {img: 'https://veggievagabonds.com/wp-content/uploads/2019/08/IMG_20180923_094155722_HDR-1-01.jpeg', id: '4444', title: 'Knuckles', height: '818m'},
        ]
    },



    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        }
    },



    actions: {
        async getRecipes({ state, commit }, plan) {
            try {
                let response = await axios.get(`${state.apiUrl}`, {
                    params: {
                        q: plan,
                        app_id: '059b937f',
                        app_key: 'f47ae2eb8e6245bee78e9e68b6806288',
                        from: 0,
                        to: 9
                    }
                });
                commit('setRecipes', response.data.hits);
            } catch (error) {
                commit('setRecipes', []);
            }
        }
    },



    getters: {
        hikez (state) {
            return state.hikez.sort((hikeA,hikeB)=>{
                return hikeA > hikeB
            })
        },
        f_hikez (state, getters) {
            return getters.hikez.slice(0,5)

        }
    }
});




