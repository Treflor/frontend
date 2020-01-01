<template>
<v-parallax height="696" src="https://i.imgur.com/km4strr.jpg">
<div class="main6">
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm14 md6>
                <v-card class="elevation-19" height="520">
                    <v-toolbar dark color="#80f442">
                        <v-toolbar-title>Join Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" @click.prevent="onSignup" >
                            <v-text-field prepend-icon="person" name="fullname" label="Full Name" type="name"
                                          v-model="fulname"  >
                            </v-text-field>
                            <v-text-field prepend-icon="person" name="username" label="Username" type="name"
                                          v-model="usrname"  >
                            </v-text-field>
                            <v-text-field prepend-icon="email" name="email" label="Email" type="email"
                                          v-model="email" :rules="emailRules" required data-cy="signinEmailField">
                            </v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Password" type="password"
                                          data-cy="signinPasswordField" v-model="password"
                                          :rules="passwordRules" required>
                            </v-text-field>
                             <v-text-field prepend-icon="lock" name="confirmPasswords" label="Confirm Password" type="password"
                                          data-cy="signinPasswordField" v-model="password"
                                          :rules="[comparePasswords]" required>
                            </v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" :disabled="!valid" @click="submit" to="/" data-cy="signinSubmitBtn">Join</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</v-parallax>
</template>

<script>
export default {
    name: 'Join',
    data() {
        return {
            valid: false,
            email: '',
            password: '',
            fulname:'',
            usrname:'',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v =>
                    v.length >= 6 ||
                    'Password must be greater than 6 characters'
            ]
        };
    },

    muted: {
        comparePasswords () {
            return this.password !== this.confirmPassword
        },
/*
        user () {
            return this.$store.getters.user
        }
*/
    },
/*
    watch: {
        user (value) {
            if( value !== null && value !== undefined){
                this.$router.push('/')
            }

        }
    },
*/

    methods: {
        onSignup() {
           
      /*          this.$store.dispatch('signUserUp', {
                    email: this.email,
                    password: this.password
                })
        */
       console.log(this.email , this.password)

        }
    }
};
</script>

<style scoped>
/* .main {
        height: 629px;
        background: linear-gradient(to right, #eb8444,#eb5244);
    }
*/

</style>