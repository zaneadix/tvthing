<template>
    
    <nav class="nav">
        <div class="container">
            <div class="nav-left">
            <router-link to="/" class="nav-item">TV Thing</router-link>
            </div>
            
            <div class="nav-right nav-menu">
                <router-link to="/shows" class="nav-item">Shows</router-link>
                <span v-if="!userAccount">
                    <router-link to="/sign-in" class="nav-item">Sign In</router-link>
                    <router-link to="/sign-up" class="nav-item">Sign Up</router-link>
                </span>
                <span v-else>
                    <button class="nav-item">Sign Out</button>
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
        }
    }

</script>