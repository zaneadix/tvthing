<template>

    <form class="auth-form"
          v-on:submit.prevent>

        <label for="email">Email</label>
        <div class="control">
            <input type="text"
                   class="input is-medium"
                   name="email"
                   v-model="email"
                   v-bind:class="{ 'is-danger': errors.has('email') }"
                   v-validate="'required|email'">
            <p class="is-error"
               v-if="errors.has('email')">{{errors.first('email')}}</p>
        </div>

        <label for="username">Username</label>
        <div class="control">
            <input type="text"
                   class="input is-medium"
                   name="username"
                   v-model="username"
                   v-bind:class="{ 'is-danger': errors.has('username') }"
                   v-validate="'required'">
            <p class="is-error"
               v-if="errors.has('username')">{{errors.first('username')}}</p>
        </div>

        <label for="password">Password</label>
        <div class="control">
            <input type="text"
                   class="input is-medium"
                   name="password"
                   v-model="password"
                   v-bind:class="{ 'is-danger': errors.has('password') }"
                   v-validate="'required'">
            <p class="is-error"
               v-if="errors.has('password')">{{errors.first('password')}}</p>
        </div>

        <div class="control">
            <button class="button is-medium is-primary"
                    v-bind:class="{ 'is-loading': authenticating, 'is-success': success, 'is-danger': failure }"
                    v-bind:disabled="errors.any()"
                    v-on:click.capture="submit">
                {{ failure ? 'Try Again' : 'Sign Up' }}
            </button>
            <p class="error-response is-error"
               v-if="failure">{{failureMessage}}</p>
        </div>

    </form>

</template>


<script>
    
    import Vue from 'vue';
    import { mapActions } from 'vuex';
    import AuthFormMixin from './AuthFormMixin';

    export default Vue.extend({

        mixins: [AuthFormMixin],

        name: 'SignUpForm',

        data: () => {
            return {
                email: '',
            }
        },

        methods: {

            getData: function () {
                return {
                    email: this.email,
                    username: this.username,
                    password: this.password
                }
            },

            authenticate: function (data) {
                return this.signUp(data);
            },

            ...mapActions(['signUp'])
        }
    })

</script>