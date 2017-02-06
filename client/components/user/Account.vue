<template>
    
    <div id="account">
        
        <div class="container">
            
            <h1 class="title is-1">Account</h1>

            <form v-on:submit.prevent>

                <label for="username">Username</label>
                <div class="control">
                    <input type="text"
                           class="input"
                           name="username"
                           disabled
                           v-model="username"
                           v-bind:class="{ 'is-danger': errors.has('username') }"
                           v-validate="'required'">
                    <p class="is-error">{{errors.first('username') || '&nbsp'}}</p>
                </div>
                
                <label for="email">Email</label>
                <div class="control">
                    <input type="text"
                           class="input"
                           name="email"
                           v-model="email"
                           v-bind:class="{ 'is-danger': errors.has('email') }"
                           v-validate="'required|email'">
                    <p class="is-error">{{errors.first('email') || '&nbsp'}}</p>
                </div>

                <label for="givenName">Given Name</label>
                <div class="control">
                    <input type="text"
                           class="input"
                           name="givenName"
                           v-model="givenName">
                </div>

                <label for="familyName">Family Name</label>
                <div class="control">
                    <input type="text"
                           class="input"
                           name="familyName"
                           v-model="familyName">
                </div>

                <label for="familyName">Location</label>
                <div class="control">
                    <input type="text"
                           class="input"
                           name="location"
                           v-model="location">
                </div>
                
                <label for="familyName">Website</label>
                <div class="control">
                    <input type="text"
                           class="input"
                           name="website"
                           v-model="website">
                </div>


            </form>

        </div>

    </div>

</template>


<script>

    import { store, mapActions, mapState } from 'vuex';
    
    export default {

        name: 'Account',

        data: () => {
            return {
                username: '',
                email: '',
                givenName: '',
                familyName: '',
                location: '',
                website: '',
                bio: ''
            }
        },

        computed: {
            ...mapState({
                account: state => {
                    console.log(state.user.account);
                    return state.user.account;
                }
            })
        }
    }

</script>


<style lang="scss" scoped>
    

</style>