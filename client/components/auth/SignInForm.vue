<template>
    
    <form class="auth-form"
          v-on:submit.prevent>

        <label for="username">Username or Email</label>
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
                    v-bind:class="{ 'is-loading': authenticating }"
                    v-bind:disabled="errors.any()"
                    v-on:click.capture="submit">
                Sign In
            </button>
            <p class="error-response is-error"></p>
        </div>

    </form>

</template>


<script>
    
    import Vue from 'vue';
    import { mapActions } from 'vuex';
    import AuthFormMixin from './AuthFormMixin';

    export default {

        mixins: [AuthFormMixin],

        name: 'SignInForm',

        methods: {

            getData: function () {
                return {
                    username: this.username,
                    password: this.password
                }
            },

            authenticate: function (data) {
                return this.signIn(data);
            },

            ...mapActions(['signIn'])
        }
    }

</script>