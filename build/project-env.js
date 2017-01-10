'use strict';

var PROJECT_ENV = process.env.PROJECT_ENV;

var ENV_WHITELIST = ['dev', 'testing', 'prod'];

/* istanbul ignore if */
if (!PROJECT_ENV || ENV_WHITELIST.includes(PROJECT_ENV) === -1) {
    throw new Error('PROJECT_ENV: must be one of ' + ENV_WHITELIST);
}

module.exports = require('../config/env/' + PROJECT_ENV);