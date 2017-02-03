<template>
    
    <div class="hero is-dark">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Yo Wat Up
                </h1>
                <h2 class="subtitle">
                    Welcome to TV Thing. It's a thing, for TV.
                </h2>
            </div>
        </div>
    </div>

</template>


<script>

    import { mapActions, mapState } from 'vuex';

    export default {

        name: 'Home',

        computed: mapState([
            'shows'
        ]),

        methods: {
            ...mapActions([
                'retrieveShows',
                'retrievePopularShows'
            ])
        }
    }

</script>


<style>
    


</style>