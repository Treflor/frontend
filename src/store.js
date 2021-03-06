import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import axios from 'axios';

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
        hikezfinl: [],

        hikezfinl1: [],

        token: localStorage.getItem('token') || null,

        user: null ,

        usercurrent: null,

        guidez: [{img: 'https://saltinourhair.com/wp-content/uploads/2018/04/Things-to-do-Ella-Sri-Lanka-Nine-arch-bridge-couple-view.jpg', id: '1111', title: 'Ella', height: '618m', guide: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa voluptatem cupiditate sapiente at id numquam inventore fuga iure quisquam.' }],

        
        galleries : [
                {title: 'knuckles',img1 : 'https://saltinourhair.com/wp-content/uploads/2018/04/Things-to-do-Ella-Sri-Lanka-Nine-arch-bridge-couple-view.jpg' , img2 : 'https://www.tripsavvy.com/thmb/dAjVDb033cOIBYtAC3Y_S7Ld5p8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/hikinginspain-f7d12abd58584697ae354500d31ee07f.jpg' , img3 : 'https://veggievagabonds.com/wp-content/uploads/2019/08/IMG_20180923_094155722_HDR-1-01.jpeg' , img4 : '' , img5 : '' , img10 : 'https://veggievagabonds.com/wp-content/uploads/2019/08/IMG_20180923_094155722_HDR-1-01.jpeg'},
                {title: 'Ella',img1 : 'https://saltinourhair.com/wp-content/uploads/2018/04/Things-to-do-Ella-Sri-Lanka-Nine-arch-bridge-couple-view.jpg' , img2 : 'https://www.tripsavvy.com/thmb/dAjVDb033cOIBYtAC3Y_S7Ld5p8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/hikinginspain-f7d12abd58584697ae354500d31ee07f.jpg' , img3 : 'https://veggievagabonds.com/wp-content/uploads/2019/08/IMG_20180923_094155722_HDR-1-01.jpeg' , img4 : '' , img5 : '' , img6 : 'https://saltinourhair.com/wp-content/uploads/2018/04/Things-to-do-Ella-Sri-Lanka-Nine-arch-bridge-couple-view.jpg'}
      
            ],

       

        
    },



    mutations: {
    /*    setRecipes(state, payload) {
            state.recipes = payload;
        },   */
        
        
        guidesset (state, pay) {
            state.hikez = pay
        },
        guidessetfinl (state, pay) {
            state.hikezfinl = pay
        },
        createnewhike (state, pay) {
            state.hikez.push(pay)
        },
        createnewhikefinl (state, pay) {
            state.hikezfinl.push(pay)
        },

        setUser (state, pay) {
            state.user = pay
        },
        
        setToken (state, pay) {
            state.token = pay.token
            localStorage.setItem('token', pay.token)
        },

        setGuidez (state, guidez) {
            state.guidez.push(guidez)
        },

        setCurrentUser (state, pay) {
            state.usercurrent.push(pay)
        }

    },


    actions: {

        creategallery ({getters},pay){
            let config = {
                headers: {
                  Authorization: getters.token
                }
              }

            let uri = 'https://api-treflor.herokuapp.com/images/';
            axios.post(uri, 
                {
                 title: pay.title,
                 img0: pay.img0,
                 img1: pay.img1,
                 img2: pay.img2,
                 img3: pay.img3,
                 img4: pay.img4,
                
                }, config
                )
                .then((response) => {
                console.log(response)}
                )
                .catch((error) => { 
                    console.log(error)}
                )


        },

        sendforpass ({pay}){
            let uri = 'https://api-treflor.herokuapp.com/user/';
                axios.post(uri, 
                    {email:pay.email}
                    )
                    .then((response) => {
                    console.log(response)}
                    )
                    .catch((error) => { 
                        console.log(error)}
                    )

        },

        userfetch ({commit}) {
            let config = {
                headers: {
                  Authorization: getters.token
                }
              }
              let uri = 'https://api-treflor.herokuapp.com/user/';
                    axios.get(uri, /*this.sign*/   
                     config )
                     .then((response) => {
                         commit('setCurrentUser',response.data)
                     }).catch((error) => {
                         console.log(error)
                     })
        },



        


        signin ({commit}, pay) {
            let uri = 'https://api-treflor.herokuapp.com/oauth/signin';
              axios.post(uri, /*this.sign*/   
               {email: pay.email ,
               password: pay.password
               } )
              
            .then((response) => {
                const newtoken = {
                    token: response.data.token
                }
                commit('setToken', newtoken)
            }).catch((error) => {
                console.log(error)
            })
        },


            signup({commit}, pay) {
                let uri = 'https://api-treflor.herokuapp.com/oauth/signup';
                axios.post(uri, /*this.sign*/   
                 {email: pay.email ,
                 password: pay.password,
                 password2: pay.password2,
                 family_name: pay.family_name, 
                 photo: pay.photo, 
                 given_name:pay.given_name
                 } )
                
              .then((response) => {
                  const newtoken = {
                      token: response.data.token
                  }
                  commit('setToken', newtoken)
              }).catch((error) => {
                  console.log(error)
              })  
            },

        
            //   this.$store.dispatch('signin', {email: this.email, password: this.password})
  
           //    signin ({commit}, pay) {
          //    console.log(this.email)
  /*            let uri = 'https://api-treflor.herokuapp.com/oauth/signin';
              axios.post(uri, /*this.sign*/   
    /*           {email: this.email ,
               password: this.password
               } )
               .then((response) => {
                const token = response.data.token;              
                const newUser = {
                      id: token,
                  }
             //     commit('setUser', newUser)
                  const parsed = JSON.stringify(token);
                  localStorage.setItem('token', parsed);
  
  
  
                  if(localStorage.getItem('token')) {
                      this.$router.push('/') 
                      vm.$forceUpdate();
                  }else{
                       this.$router.push('/wrong')
                  }
  
          })
  
  
              
              .catch((error) => {
                  console.log(error)
              })
  //        }
  
  
  
  
    
    */
    
    
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

        guidezfetch ({commit}) {
            let config = {
                headers: {
                  Authorization: getters.token
                }
              }
              let uri = 'https://api-treflor.herokuapp.com/guides';
                    axios.get(uri, /*this.sign*/   
                     config )
                     .then((response) => {
                         commit('setGuidez',response.data.guides)
                     }).catch((error) => {
                         console.log(error)
                     })
        },

        guidesfetch ({commit}) {
            firebase.database().ref('guides').once('value')
            .then((data) => {
                const guides = []
                const obj = data.val()
                for(let key in obj) {
                    guides.push({
                        id: key,
                        title: obj[key].title,
                        guide: obj[key].guide,
                        img: obj[key].img,
                        date: obj[key].date
                    })
                }
                commit('guidesset',guides)
            })
            .catch(
                (error) => {
                    console.log(error)
                }
            )
        },

        guidesfetchfinl ({commit}) {
            firebase.database().ref('guidesfinl').once('value')
            .then((data) => {
                const guides = []
                const obj = data.val()
                for(let key in obj) {
                    guides.push({
                        id: key,
                        title: obj[key].title,
                        guide: obj[key].guide,
                        img: obj[key].img,
                        creatorId: obj[key].creatorId
                     //   date: obj[key].date
                    })
                }
                commit('guidessetfinl',guides)
            })
            .catch(
                (error) => {
                    console.log(error)
                }
            )
        },

        createnewhikebak ({getters}, pay) {
          
       //         title: pay.title,
         //       img: pay.img,
           //     guide: pay.guide,
       // const  date: pay.date.toISOString(), 
             //   creatorId: getters.user.user.uid 
   /*      const hike = {
             date: pay.date.toISOString()
         }
     */    //   commit('createnewhike', hike)

    //        firebase.database().ref('guides').push(hike)

   // let date= pay.date.toISOString()

    let config = {
        headers: {
          Authorization: getters.token
        }
      }
      let uri = 'https://api-treflor.herokuapp.com/guides';
            axios.post(uri, /*this.sign*/   
             {title: pay.title,
                img: pay.img,
                guide: pay.guide,
                date: pay.date
             }, config )
             .then((response) => {
             console.log(response)
         console.log(getters.token)
        })


            
            .catch((error) => {
                console.log(error)
             //   console.log(localStorage.getItem('token'))
            })
        },



      
    


        createnewhike ({ commit }, pay) {
            const hike = {
                title: pay.title,
                img: pay.img,
                guide: pay.guide,
                date: pay.date.toISOString(), 
             //   creatorId: getters.user.user.uid 
            }
         //   commit('createnewhike', hike)

            firebase.database().ref('guides').push(hike)
            .then((data) => {
                const key = data.key

                commit('createnewhike', {
                    ...hike,
                    id: key
                })
            })
            .catch((error) => {
                console.log(error)
            })
       
       
        },

        createnewhikefinl ({ commit /*, getters */}, pay) {
            const hike = {
                title: pay.title,
                img: pay.img,
                guide: pay.guide,
               
            //    date: pay.date.toISOString()

            }
         //   commit('createnewhike', hike)

            firebase.database().ref('guidesfinl').push(hike)
            .then((data) => {
                const key = data.key

                commit('createnewhikefinl', {
                    ...hike,
                    id: key
                })
            })
            .catch((error) => {
                console.log(error)
            })
       
       
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
        },

        SignInauto ({commit}, pay) {
            commit ('setUser', {id: pay.uid})
        },

        loggingout ({commit}) {
      /*      firebase.auth().signOut()
            commit('setUser', null) */

           // localStorage.setItem('token', null);

           localStorage.removeItem('token')
        //   this.$router.push('/')
        
        },

/*
        signin ( pay) {
        //    console.log(this.email)
            let uri = 'https://api-treflor.herokuapp.com/oauth/signin';
            axios.post(uri, /*this.sign*/   
  /*           {email: pay.email ,
             password: pay.password
             } )
             .then((response) => {
              const token = response.data.token;              
       //       const newUser = {
         //           id: token,
           //     }
           //     commit('setUser', newUser)
                const parsed = JSON.stringify(token);
                localStorage.setItem('state.user', parsed);
        })


            
            .catch((error) => {
                console.log(error)
            })
        },  */
 
        
        
            
    },



    getters: {
    
        hikez (state) {
            return state.hikez.sort((hikeA,hikeB)=>{
                return hikeA > hikeB
            })
        },

        guidez (state) {
            return state.guidez.sort((guide1,guide2) => {
                return guide1.date > guide2.date
            })
        },


        hikezfinl (state) {
            return state.hikezfinl.sort((hikeA,hikeB)=>{
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
        DoneHikefinl (state) {
                return (hiketitle) => {
                    return state.hikezfinl.find((hike) => {
                        return hike.title == hiketitle
                    })
                }
        },
        
        DoneHikefinl1 (state) {
            return (hiketitle) => {
                return state.hikezfinl1.find((hike) => {
                    return hike.title == hiketitle
                })
            }
    },

        user (state) {
            return state.user
        },

        galleries (state) {
            return state.galleries
        },
        
        token (state) {
            return state.token
        },

        usercurrent (state) {
            return state.usercurrent
        }

        
    }
})



