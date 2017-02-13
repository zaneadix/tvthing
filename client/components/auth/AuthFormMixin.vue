<script>

    import { store, mapActions, mapState } from 'vuex';
    
    export default {

        data: () => {
            return {
                username: '',
                password: '',
                success: false,
                failure: false,
                failureMessage: '',
                successRoute: 'account'
            }
        },

        computed: {
            ...mapState({
                authenticating: state => state.user.authenticating
            })
        },

        methods: {

            submit: function () {
                this.authenticate(this.getData())
                    .then((response) => {
                        if (response.status == 200) {
                            this.failure = false;
                            this.success = true;
                            this.$router.push(this.successRoute);
                        } else {
                            this.failure = true;
                            this.success = false;
                            this.failureMessage = response.data;
                        }
                    });
            }
        }
    }

</script>