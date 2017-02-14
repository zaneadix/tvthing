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
                               v-model="accountDetails.username"
                               v-bind:class="{ 'is-danger': errors.has('username') }"
                               v-validate="'required'">
                    </div>
                    
                    <div class="control email-control">
                        <label for="email">Email</label>
                        <input type="text"
                               class="input"
                               name="email"
                               v-model="accountDetails.email"
                               v-bind:class="{ 'is-danger': errors.has('email') }"
                               v-validate="'required|email'">
                    </div>

                    <div class="control given-name-control">
                        <label for="givenName">Given Name</label>
                        <input type="text"
                               class="input"
                               name="givenName"
                               v-model="accountDetails.givenName">
                    </div>

                    <div class="control family-name-control">
                        <label for="familyName">Family Name</label>
                        <input type="text"
                               class="input"
                               name="familyName"
                               v-model="accountDetails.familyName">
                    </div>

                </div>
                
                <div class="control">
                    <label for="location">Location</label>
                    <input type="text"
                           class="input"
                           name="location"
                           v-model="accountDetails.location">
                </div>
                
                <div class="control">
                    <label for="website">Website</label>
                    <input type="text"
                           class="input"
                           name="website"
                           v-model="accountDetails.website"
                           v-bind:class="{ 'is-danger': errors.has('website') }"
                           v-validate="'url'">
                </div>

                <div class="control">
                    <label for="bio">Bio</label>
                    <textarea type="text"
                           class="input"
                           name="bio"
                           v-model="accountDetails.bio">
                </div>

                <div class="errors"
                     v-if="errors.any()">
                    <p class="is-error"
                       v-for="error in errors.all()">{{ error }}</p>
                </div>

                <div class="control">
                    <button class="button is-primary"
                            v-bind:class="{ 'is-loading': updating, 'is-danger': failure }"
                            v-bind:disabled="errors.any()"
                            v-on:click.capture="submitAccountUpdate">
                        {{ failure ? 'Try Again' : 'Update Account Details' }}
                    </button>
                    <p class="error-response is-error"
                       v-if="failure">{{failureMessage}}</p>
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
                failure: false,
                success: false,
                failureMessage: '',
                accountDetails: {
                    username: '',
                    email: '',
                    givenName: '',
                    familyName: '',
                    location: '',
                    website: '',
                    bio: ''
                }
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
                    this.accountDetails.username = `${account.username}`;
                    this.accountDetails.email = `${account.email}`;
                    this.accountDetails.givenName = `${account.givenName}`;
                    this.accountDetails.familyName = `${account.familyName}`;
                    this.accountDetails.location = `${account.location}`;
                    this.accountDetails.website = `${account.website}`;
                    this.accountDetails.bio = `${account.bio}`;
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
                    email: this.accountDetails.email,
                    givenName: this.accountDetails.givenName,
                    familyName: this.accountDetails.familyName,
                    location: this.accountDetails.location,
                    website: this.accountDetails.website,
                    bio: this.accountDetails.bio
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.failure = false;
                        this.success = true;
                        this.failureMessage = '';
                    } else {
                        this.failure = true;
                        this.success = false;
                        this.failureMessage = response.data;
                    }
                });;
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