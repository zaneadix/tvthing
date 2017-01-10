
<template>
    
    <div id="show-detail">

        <p v-if="loadingShow">Loading...</p>

        <div v-if="show"
             class="hero is-large"
             v-bind:style="{ backgroundImage: 'url(https://image.tmdb.org/t/p/w1280/' + show.backdrop_path + ')' }">

            <div class="hero-body">
                <div class="container">

                </div>
            </div>
        </div>
        
    </div>

</template>


<script>

    import { mapState, mapActions } from 'vuex';
    
    export default {

        name: 'Show',

        created: function () {
            this.retrieveShowDetail(this.$route.params.id);
        },

        computed: {
            ...mapState({
                loadingShow: state => state.show.loading,
                show: function (state) {
                    console.log(this.$route.params.id);
                    console.log(Object.assign({}, state.show.details));
                    return state.show.details[this.$route.params.id];
                }
            })
        },

        methods: {
            ...mapActions([
                'retrieveShowDetail'
            ])
        }
    }

</script>


<style lang="scss" scoped>
    
    #show-detail {

        .hero {
            background-size: cover;
            // background-position: center;
        }
    }

</style>