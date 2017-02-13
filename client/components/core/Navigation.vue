<template>
    
    <nav class="nav">
        <div class="container">
            <div class="nav-left">
            <router-link to="/" class="nav-item">TV Thing</router-link>
            </div>
            
            <div class="nav-right nav-menu">
                <router-link to="/shows" class="nav-item">Shows</router-link>
                <span class="nav-conditional" v-if="!userAccount">
                    <router-link to="/sign-in" class="nav-item">Sign In</router-link>
                    <router-link to="/sign-up" class="nav-item">Sign Up</router-link>
                </span>
                <span class="nav-conditional" v-else>
                    <router-link to="/account" class="nav-item">Account</router-link>
                    <span class="nav-item">
                        <button class="button is-primary" v-on:click="executeSignOut()">Sign Out</button>
                    </span>
                </span>
            </div>
        </div>
    </nav>

</template>

<script>

    import { store, mapActions, mapState } from 'vuex';
    
    export default {

        name: 'Navigation',

        computed: {
            ...mapState({
                userAccount: function (state) {
                    return state.user.account;
                }
            })
        },

        methods: {

            ...mapActions([
                'signOut'
            ]),

            executeSignOut: function () {
                this.signOut()
                    .then((response) => {
                        if (response.status === 200) {
                            this.$router.push('/');
                        }
                    })
            }
        }
    }

</script>

<style lang="scss" >
   
   .nav-conditional {
        display: flex;
   } 

</style>