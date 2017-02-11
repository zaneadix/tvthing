
export class Show {
    constructor (id) {
        this.loading = false;
        this.failed = false;
        this.id = id;
        this.backdrop_path = '';
        this.created_by = [];
        this.episode_run_time = [];
        this.first_air_date = '';
        this.genres = [];
        this.homepage = '';
        this.in_production = false;
        this.languages = [];
        this.last_air_date = '';
        this.name = '';
        this.networks = [];
        this.number_of_episodes = 0;
        this.number_of_seasons = 0;
        this.origin_country = [];
        this.original_language = '';
        this.original_name = '';
        this.overview = '';
        this.popularity = 0;
        this.poster_path = '';
        this.production_companies = [];
        this.seasons = [];
        this.status = '';
        this.type = '';
        this.vote_avg = 0;
        this.vote_count = 0;
    }
}

export class Season {
    constructor () {
        this.loading = false;
        this.failed = false;
        this.detailed = false;
        this.open = false;

        this.air_date = '';
        this.episodes = [];
        this.name = '';
        this.overview = '';
        this.id = '';
        this.post_path = '';
        this.season_number = null;
    }
}

export class Episode {
    constructor () {
        
    }
}