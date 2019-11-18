<template>
<v-parallax height="696" src="https://i.imgur.com/km4strr.jpg">
<div class="main">
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm14 md6>
                <v-card class="elevation-19" height="520">
                    <v-toolbar dark color="#80f442">
                        <v-toolbar-title>Join Form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" >
                            <v-text-field prepend-icon="person" name="fullname" label="Full Name" type="name"
                                          v-model="fulname" :rules='FullnmeRules' >
                            </v-text-field>
                            <v-text-field prepend-icon="person" name="username" label="Username" type="name"
                                          v-model="usrname" :rules='usrnmeRules' >
                            </v-text-field>
                            <v-text-field prepend-icon="email" name="email" label="Email" type="email"
                                          v-model="email" :rules="emailRules" required data-cy="signinEmailField">
                            </v-text-field>
                            <v-text-field prepend-icon="lock" name="password" label="Password" type="password"
                                          data-cy="signinPasswordField" v-model="password"
                                          :rules="passwordRules" required>
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
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v =>
                    v.length >= 6 ||
                    'Password must be greater than 6 characters'
            ],
            usrnmeRules: [
                 v => !!v || 'User-name is required',
                 v =>
                    v.length >= 4 ||
                    'User-name must be greater than 4 characters'
            ],
            FullnmeRules: [
                v => !!v || 'Full-name is required',
                 v =>
                    v.length >= 8 ||
                    'Full-name must be greater than 8 characters'
            ]
        };
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.$store.dispatch('userLogin', {
                    email: this.email,
                    password: this.password
                });
            }
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