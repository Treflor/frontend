import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
//import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
     /*   recipes: [],
        apiUrl: 'https://api.edamam.com/search',
    */ 
        hikez: [
            {img: 'https://saltinourhair.com/wp-content/uploads/2018/04/Things-to-do-Ella-Sri-Lanka-Nine-arch-bridge-couple-view.jpg', id: '1111', title: 'Ella', height: '618m', guide: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa voluptatem cupiditate sapiente at id numquam inventore fuga iure quisquam.' },
            {img: 'https://www.tripsavvy.com/thmb/dAjVDb033cOIBYtAC3Y_S7Ld5p8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/hikinginspain-f7d12abd58584697ae354500d31ee07f.jpg', id: '2222', title: 'Bible Rock', height: '418m', guide: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa voluptatem cupiditate sapiente at id numquam inventore fuga iure quisquam.'},
            {img: 'https://veggievagabonds.com/wp-content/uploads/2019/08/IMG_20180923_094155722_HDR-1-01.jpeg', id: '4444', title: 'Knuckles', height: '818m', guide: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa voluptatem cupiditate sapiente at id numquam inventore fuga iure quisquam.'},
        ],

        user: null
    },



    mutations: {
    /*    setRecipes(state, payload) {
            state.recipes = payload;
        },   */
        createnewhike (state, pay) {
            state.hikez.push(pay)
        },

        setUser (state, pay) {
            state.user = pay
        }  

    },


    actions: {
/*        async getRecipes({ state, commit }, plan) {
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
        },  */

        createnewhike ({ commit }, pay) {
            const hike = {
                title: pay.title,
                img: pay.img,
                guide: pay.guide,
                date: pay.date.toISOString()
            }
            commit('createnewhike', hike)
        },

        signUserup ({commit}, pay){
            firebase.auth().createUserWithEmailAndPassword(pay.email,pay.password)
            .then(
                user => {
                    const newUser = {
                        id: user.user.uid                        
                    }

                    commit ('setUser', newUser)
                }
            )
           
            .catch(
                error => {
                console.log(error)
                }
            )
            
        },

        signUserin ({commit}, pay) {
            firebase.auth().signInWithEmailAndPassword(pay.email, pay.password)
            .then (
                user => {
                    const newUser = {
                        id: user.user.uid,
                    }
                    commit('setUser', newUser)
                }
            )

            .catch (
                error => {
                    console.log(error)
                }
            )
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

        },
        DoneHike (state) {
            return (hiketitle) => {
                return state.hikez.find((hike) => {
                    return hike.title == hiketitle
                })
            }
        },
        

        user (state) {
            return state.user
        }
    }
})




