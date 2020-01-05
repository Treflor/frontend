<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="item in items">
                    <v-list-tile :key="item.title">
                        <v-list-tile-content>
                            <v-btn 
                            flat
                            :to="item.to">
                            {{item.title}}
                            </v-btn>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${item.title}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="white">   
           
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
            
                <v-toolbar-title data-cy="titleBtn" class="blue--text">{{appTitle}}</v-toolbar-title>
            </router-link>
       <!--     <v-btn flat class="hidden-sm-and-down nav-menu" to="/menu" data-cy="menuBtn">Menu</v-btn>  -->
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                flat
                v-for="item in items"
                :key="item.title"
                :to="item.to"
                >
                {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Treflor',
            drawer: false,
            
        };
    },
    computed: {
        items () {
            let items = [
                {title: 'Sign Up' , to: '/signup'},                
                {title: 'Sign In' , to: '/sign-in'},
            ]

            if(this.userIsauthenticated ){
                items = [                    
                {title: 'View Guides' , to: '/viewguidesfinl'},
                {title: 'Create Guide' , to: '/newhike'},
                {title: 'Profile' , to: '/profile'},

                ]
            }
            return items
        },

        userIsauthenticated () {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        }
    },
   
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
.transparent {
   background-color: transparent!important;
 }
</style>