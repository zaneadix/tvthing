<template>
    
    <section id="discover-shows">

        <div class="hero is-dark">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Find The Best Shows
                    </h1>
                    <h1 class="title is-pulled-right">
                        Discover New Ones
                    </h1>
                </div>
            </div>
        </div>

        <nav class="nav">
            <div class="container">
                <div class="nav-left">
                    <span class="nav-item">
                        Genre
                    </span>
                    <span class="nav-item">
                        Network
                    </span>
                    <span class="nav-item">
                        Runtime
                    </span>
                    <span class="nav-item">
                        Language
                    </span>
                </div>
                <div class="nav-right">
                    <span class="nav-item">
                        <input type="text" class="input" placeholder="search">
                    </span>
                </div>
            </div>
        </nav>

        <div class="container has-content-pad">
            <h3 v-if="loadingShows">Loading...</h3>
            <div class="columns is-multiline">
                <div class="column is-3" v-for="show in shows">
                    <router-link :to="'/show/' + show.id">
                        <div class="show-card">
                            <img v-bind:src="'https://image.tmdb.org/t/p/w300/' + show.backdrop_path"
                                 v-bind:alt="show.name + ' poster'">
                            <div class="details">
                                <h5 class="title is-5">{{show.name}}</h5>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        
    </section>

</template>


<script>
    
    import { store, mapActions, mapState } from 'vuex';

    export default {

        name: 'Shows',

        mounted: function () {
            this.discoverShows();
        },

        computed: {
            ...mapState({
                loadingShows: state => state.discover.loading,
                shows: state => state.discover.results
            })
        },

        methods: {
            ...mapActions([
                'retrieveShows',
                'discoverShows'
            ])
        }
    }

</script>


<style lang=scss scoped>
    
    #discover-shows {

        .show-card {

            border: 1px solid #C2C2C2;
            border-radius: 5px;
            background-color: #FFF;
            overflow: hidden;
            cursor: pointer;

            .details {
                padding: .5em;
            }  
        }
    }

</style>