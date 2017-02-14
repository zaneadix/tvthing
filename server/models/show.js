import mongoose from 'mongoose';

export default mongoose.model('Show', new mongoose.Schema({
    backdrop_path      : String,
    created_by         : Array,
    episode_run_time   : Array,
    genres             : Array,
    homepage           : String,
    in_production      : Boolean,
    languages          : Array,
    last_air_data      : String,
    name               : String,
    networks           : Array,
    number_of_episodes : Number,
    number_of_seasons  : Number,
    origin_country     : Array,
    overview           : String,
    id                 : Number
}));

// this.id = id;
// this.backdrop_path = '';
// this.created_by = [];
// this.episode_run_time = [];
// this.first_air_date = '';
// this.genres = [];
// this.homepage = '';
// this.in_production = false;
// this.languages = [];
// this.last_air_date = '';
// this.name = '';
// this.networks = [];
// this.number_of_episodes = 0;
// this.number_of_seasons = 0;
// this.origin_country = [];
// this.original_language = '';
// this.original_name = '';
// this.overview = '';
// this.popularity = 0;
// this.poster_path = '';
// this.production_companies = [];
// this.seasons = [];
// this.status = '';
// this.type = '';
// this.vote_avg = 0;
// this.vote_count = 0;