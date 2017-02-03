<template>
    
    <section id="sign-up">

        <form id="sign-up-form"
              v-on:submit.prevent>

            <label for="email">Email</label>
            <div class="control">
                <input type="text"
                       class="input is-medium"
                       name="email"
                       placeholder="You're favorite internet mailing address"
                       v-model="email"
                       v-bind:class="{ 'is-danger': errors.has('email') }"
                       v-validate="'required|email'">
                <p class="is-error">{{errors.first('email') || '&nbsp'}}</p>
            </div>

            <label for="username">Username</label>
            <div class="control">
                <input type="text"
                       class="input is-medium"
                       name="username"
                       placeholder="Must be 4 syllables. JK tho."
                       v-model="username"
                       v-bind:class="{ 'is-danger': errors.has('username') }"
                       v-validate="'required'">
                <p class="is-error">{{errors.first('username') || '&nbsp'}}</p>
            </div>

            <label for="password">Password</label>
            <div class="control">
                <input type="text"
                       class="input is-medium"
                       name="password"
                       placeholder="Your middle inital squared"
                       v-model="password"
                       v-bind:class="{ 'is-danger': errors.has('password') }"
                       v-validate="'required'">
                <p class="is-error">{{errors.first('password') || '&nbsp'}}</p>
            </div>

            <div class="control">
                <button class="button is-medium"
                        v-bind:class="{ 'is-loading': authenticating, 'is-primary': !success, 'is-success': success, 'is-danger': failure }"
                        v-bind:disabled="errors.any()"
                        v-on:click.capture="submit">
                    {{ buttonText() }}
                </button>
                <p class="error-response is-error">{{ failure ? failureMessage : '&nbsp'}}</p>
            </div>

        </form>

    </section>

</template>


<script>
    
    import { store, mapActions, mapState } from 'vuex';

    export default {

        name: 'SignUp',

        data: () => {
            return {
                email: '',
                username: '',
                password: '',
                defaultButtonText: 'Sign the fuck up',
                success: false,
                successButtonText: 'You signed the fuck up!',
                failure: false,
                failureButtonText: 'Derp',
                failureMessage: ''
            }
        },

        computed: {
            ...mapState({
                authenticating: state => state.user.authenticating
            })
        },

        methods: {

            buttonText: function () {
                if (!this.success && !this.failure) {
                    return this.defaultButtonText;
                } else {
                    return this.success ? this.successButtonText : this.failureButtonText;
                }
            },

            directToAccount: function () {
                console.log('directing');
                this.$router.push('account');
            },

            submit: function () {
                this.signUp({
                    email: this.email,
                    username: this.username,
                    password: this.password
                })
                .then((response) => {
                    if (response.status == 200) {
                        this.failure = false;
                        this.success = true;
                        this.directToAccount();
                    } else {
                        this.failure = true;
                        this.success = false;
                        this.failureMessage = response.data;
                    }
                });
            },

            ...mapActions(['signUp'])
        }
    }

</script>


<style lang=scss scoped>
    
    #sign-up {
        
        display: flex;
        min-height: 80vh;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;

        #sign-up-form {
            min-width: 500px;

            .control {
                
                p.is-error {
                    margin-bottom: 1em;
                }

                p.error-response {
                    text-align: center;
                }

                button {
                    display: block;
                    margin: 0 auto;
                    width: 80%;
                }
            }
        }
    }

</style>