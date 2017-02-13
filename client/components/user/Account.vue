<template>
    
    <div id="account">
        
        <div class="container page-content">

            <form id="account-info" v-on:submit.prevent>

                <h1 class="title is-1">Account</h1>
                
                <div class="is-clearfix">

                    <div class="control username-control">
                        <label for="username">Username</label>
                        <input type="text"
                               class="input"
                               name="username"
                               disabled
                               v-model="username"
                               v-bind:class="{ 'is-danger': errors.has('username') }"
                               v-validate="'required'">
                        <p class="is-error">{{errors.first('username')}}</p>
                    </div>
                    
                    <div class="control email-control">
                        <label for="email">Email</label>
                        <input type="text"
                               class="input"
                               name="email"
                               v-model="email"
                               v-bind:class="{ 'is-danger': errors.has('email') }"
                               v-validate="'required|email'">
                        <p class="is-error">{{errors.first('email')}}</p>
                    </div>

                    <div class="control given-name-control">
                        <label for="givenName">Given Name</label>
                        <input type="text"
                               class="input"
                               name="givenName"
                               v-model="givenName">
                    </div>

                    <div class="control family-name-control">
                        <label for="familyName">Family Name</label>
                        <input type="text"
                               class="input"
                               name="familyName"
                               v-model="familyName">
                    </div>

                </div>
                
                <div class="control">
                    <label for="location">Location</label>
                    <input type="text"
                           class="input"
                           name="location"
                           v-model="location">
                </div>
                
                <div class="control">
                    <label for="website">Website</label>
                    <input type="text"
                           class="input"
                           name="website"
                           v-model="website">
                </div>

                <div class="control">
                    <label for="bio">Bio</label>
                    <textarea type="text"
                           class="input"
                           name="bio"
                           v-model="bio">
                </div>

                <div class="control">
                    <button class="button is-primary"
                            v-bind:class="{ 'is-loading': updating }"
                            v-bind:disabled="errors.any()"
                            v-on:click.capture="submitAccountUpdate">
                        Update Account Details
                    </button>
                    <p class="error-response is-error"></p>
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

        watch: {
            account: () => {}
        },

        computed: {
            ...mapState({
                updating: function (state) {
                    return state.user.updating;
                },
                account: function (state) {
                    let account = state.user.account;
                    this.username = `${account.username}`;
                    this.email = `${account.email}`;
                    this.givenName = `${account.givenName}`;
                    this.familyName = `${account.familyName}`;
                    this.location = `${account.location}`;
                    this.website = `${account.website}`;
                    this.bio = `${account.bio}`;
                    return state.user.account;
                }
            })
        },

        methods: {
            ...mapActions([
                'updateAccountDetails'
            ]),

            submitAccountUpdate: function () {
                this.updateAccountDetails({
                    email: this.email,
                    givenName: this.givenName,
                    familyName: this.familyName,
                    location: this.location,
                    website: this.website,
                    bio: this.bio
                });
            }
        }
    }

</script>


<style lang="scss" scoped>
    
    #account-info {
        width: 50%;

        .username-control,
        .email-control,
        .given-name-control,
        .family-name-control {
            width: 49%;
            display: inline-block;
            float: left;
        }

        .email-control,
        .family-name-control {
            float: right;
        }
    }

</style>