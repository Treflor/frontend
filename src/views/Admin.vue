<template>
<!--<v-parallax height="596" src="https://i.imgur.com/q5E1Wdt.jpg">  -->  
<v-parallax height="596" src="https://pantheragroup.com/wp-content/uploads/2016/06/material-design-background-e1505759203405.jpg">  
<div class="main">
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm14 md6>
                <v-card class="elevation-19" height="336">
                    <v-toolbar dark color="#80f442">
                        <v-toolbar-title>Admin Login</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" >
                            <v-text-field prepend-icon="person" name="email" label="Email" type="email"
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
                        <v-btn color="error" :disabled="!valid" @click="submit" to="/adminpanel" data-cy="signinSubmitBtn">Login</v-btn>
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
    name: 'Admin',
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
  /*  .main {
        height: 629px;
    /*    background: linear-gradient(to right, #44eb44,#eaf2df);   */
    /*    background-image: url("https://i.imgur.com/q5E1Wdt.jpg");
        background-size:     cover;                      
    background-repeat:   no-repeat;
    background-position: center center;   
    } */
</style>