<template>
    <vue-navigation-bar :options="options" />
</template>

<script>
    export default {
        name: 'HomeMenu',
        data () {
            return {
                navbarData: {
                    elementId: 'main-navbar',
                    isUsingVueRouter: true,
                    mobileBreakpoint: 992,
            //        brandImagePath: '/',
            //        brandImage: require('../src/assets/images/lockup-color.png'),
                    brandImageAltText: 'vue-navigation-bar',
                    collapseButtonStyle: 'dark',
                    ariaLabelMainNav: 'Main Navigation',
                    menuOptionsLeft: [
                        {
                            type: 'link',
                            text: 'Why Dunder Mifflin',
                            path: '/sign-in',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'About',
                                    path: '/join',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: 'Locations',
                                    path: '/join',
                                },
                                {
                                    type: 'link',
                                    text: 'Blog',
                                    path: '/join',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: 'Contact',
                            path: '/join',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: 'Customer Service',
                                    path: '/join',
                                },
                                {
                                    type: 'link',
                                    text: 'Accounting',
                                    path: '/join',
                                },
                                {
                                    type: 'link',
                                    text: 'Reception',
                                    path: '/join',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: 'Pricing',
                            path: '/join',
                        },
                    ],
                    menuOptionsRight: [
                        {
                            type: 'button',
                            text: 'Signup',
                            path: '/join',
                            class: 'button-red'
                        },
                        {
                            type: 'button',
                            text: 'Login',
                            path: '/sign-in',
                        }
                    ]
                }
            }
        }
       
    }
</script>

<style >
    .vnb .button-red {
  background: #ff3b30;
}
 
.vnb .button-red:hover {
  background: #fc0d00;
}
</style>