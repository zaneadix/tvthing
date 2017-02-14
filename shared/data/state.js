
export class ApplicationState {
    constructor () {
        this.history = [];
        this.config = {
            tmdb: false
        },
        this.user = {
            signingOut: false,
            updating: false,
            updateFailure: false,
            authenticating: false,
            account: false
        };
        this.discover = {
            loading: false,
            results: []
        };
        this.show = {
            details: {}
        };
    }
}