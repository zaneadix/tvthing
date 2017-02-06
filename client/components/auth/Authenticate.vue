<template>
    
    <div id="auth">
        
        <SignInForm v-if="routeName === 'sign-in'"></SignInForm>

        <SignUpForm v-if="routeName === 'sign-up'"></SignUpForm>

    </div>

</template>


<script>

    import SignUpForm from './SignUpForm';
    import SignInForm from './SignInForm';
    
    export default {

        name: 'Authenticate',

        computed: {
            routeName: function () {
                return this.$route.name;
            }
        },

        components: {
            SignUpForm,
            SignInForm
        }
    }

</script>


<style lang="scss" scoped>
    
    #auth {
        
        display: flex;
        min-height: 80vh;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;

        .auth-form {
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