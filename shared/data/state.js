
export class ApplicationState {
    constructor () {
        this.hydrated = false;
        this.history = [];
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