
<template>
    
    <div id="seasons">
        <ul>
            <li v-for="season in seasons">
                <p v-on:click="toggleSeason(season)">{{ season.season_number + ' - ' + season.air_date.split('-')[0] }}</p>
                <p v-if="season.loading">...loading</p>
                <ul v-if="season.detailed && season.open">
                    <li v-for="episode in season.episodes">
                        <p>{{episode.episode_number + '. ' +episode.name}}</p>
                        <p>{{episode.overview}}</p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

</template>


<script>

    import { mapActions, mapState } from 'vuex';
    
    export default {

        name: 'Seasons',

        created: function () {
            this.initializeView();
        },

        watch: {
            seasons: function () {
                console.log('seasons updated');
            }
        },

        computed: {
            ...mapState({
                showId: function (state) {
                return this.$route.params.id
                },
                seasons: function (state) {
                    return state.show.details[this.$route.params.id].seasons;
                }
            })
        },

        methods: {

            ...mapActions([
                'retrieveSeasonDetail'
            ]),

            toggleSeason: function (season) {
                season.open = !season.open;
                if (!season.detailed) {
                    this.loadSeasonDetail(season);
                }
            },

            loadSeasonDetail: function (season) {
                this.retrieveSeasonDetail({
                    showId: this.showId,
                    season_number: season.season_number
                });
                season.open = true;
            },

            initializeView: function () {
                // Make sure first season is detailed
                if (this.seasons[0] && !this.seasons[0].detailed) {
                    this.loadSeasonDetail(this.seasons[0]);
                }
            }
        }
    }

</script>