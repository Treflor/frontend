<template>
<v-parallax height="969" src="https://i.imgur.com/M0BwxSq.png">
<v-container>
<v-layout row class="form"> 
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-card-text>
                <v-container>
                    <v-form @submit.prevent="onSignin">
                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                prepend-icon="person"
                                    name="email"
                                    label="Mail"
                                    id="email"
                                    v-model="email"
                                    type="email"
                                    required
                                    >

                                </v-text-field>
                            </v-flex>

                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                prepend-icon="lock"
                                    name="password"
                                    label="Password"
                                    id="password"
                                    v-model="password"
                                    type="password"
                                    required
                                    >

                                </v-text-field>
                            </v-flex>

                        </v-layout>

                       

                        <v-layout row>
                            <v-flex xs12>
                                <v-btn color="yellow" type="submit">
                                    SignIn</v-btn>

                            </v-flex>
                        </v-layout>



                    </v-form>



                </v-container>

            </v-card-text>

        </v-card>

    </v-flex>

</v-layout>
</v-container>
</v-parallax>
</template>

<script>
export default {
    name: 'SignIn',

    data () {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
        user () {
            return this.$store.getters.user
        }

    },

    watch: {
        user (value) {
            if (value !== null && value !== undefined) {
                this.$router.push('/')
            }

        }
    },


    methods: {
        onSignin () {
            this.$store.dispatch('signUserin', {email: this.email, password: this.password})

        }
    }
}
</script>

<style scoped>
.form {
    position: relative;
    top: 169px
}
</style>
