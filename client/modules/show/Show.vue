
<template>
    
    <div id="show-detail">

        <p v-if="show.loading">Loading...</p>

        <div v-if="!show.loading">
            
            <div class="hero is-large"
                 v-bind:style="{ backgroundImage: 'url(https://image.tmdb.org/t/p/w1280/' + show.backdrop_path + ')' }">

                <div class="hero-body">
                    <div class="container">
                    </div>
                </div>

                <div class="hero-foot">
                    <div class="container">
                        <div class="nav-left">
                            <!-- <ul> -->
                                <!-- <li class="nav-item"> -->
                                    <router-link class="nav-item" :to="'overview'">Overview</router-link>
                                <!-- </li> -->
                                <!-- <li class="nav-item"> -->
                                    <router-link class="nav-item" :to="'episodes'">Episodes</router-link>
                                <!-- </li> -->
                            <!-- </ul> -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="info container">
                
                <h2>{{show.name}}</h2>
                
                <router-view></router-view>

            </div>

        </div>
        
    </div>

</template>


<script>

    import { mapState, mapActions } from 'vuex';
    // import Seasons from './seasons';
    
    export default {

        name: 'Show',

        // components: {
        //     Seasons
        // },

        created: function () {
            this.retrieveShowDetail(this.$route.params.id);
        },

        computed: {
            ...mapState({
                loadingShow: state => {
                    return state.show.loading
                },
                show: function (state) {
                    return state.show.details[this.$route.params.id];
                }
            })
        },

        watch: {
            show: function () {
                console.log('show updated');
            }
        },

        methods: {
            ...mapActions(['retrieveShowDetail']),
        }
    }

</script>


<style lang="scss" scoped>

    @import 'core-vars';
    @import 'variables';
    
    #show-detail {

        .hero {

            background-size: cover;

            .nav-left {

                .nav-item {
                    background-color: whitesmoke;
                }
            }
        }
    }

</style>