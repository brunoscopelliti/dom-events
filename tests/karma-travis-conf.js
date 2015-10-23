
// Use ENV vars on Travis and sauce.json locally to get credentials
// https://docs.saucelabs.com/ci-integrations/travis-ci/
if (!process.env.SAUCE_USERNAME) {
    process.env.SAUCE_USERNAME = require('./sauce').username;
    process.env.SAUCE_ACCESS_KEY = require('./sauce').accessKey;
}

// Browsers to run on Sauce Labs
var customLaunchers = {
    'chrome': {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'windows 8'
    },
    'firefox': {
        base: 'SauceLabs',
        browserName: 'firefox',
        platform: 'linux'
    },
    'safari': {
        base: 'SauceLabs',
        browserName: 'safari',
        version: '9.0',
        platform: 'OS X 10.11'
    },
    'safari-prev': {
        base: 'SauceLabs',
        browserName: 'safari',
        version: '8.0',
        platform: 'OS X 10.10'
    },
    'edge': {
        base: 'SauceLabs',
        browserName: 'microsoftedge',
        version: '20.10240',
        platform: 'Windows 10'
    },
    /* 'ie10': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '10.0',
        platform: 'windows 7'
    },
    'ie11': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '11.0',
        platform: 'windows 10'
    }, */
    'iphone': {
        base: 'SauceLabs',
        browserName: 'iphone',
        deviceName: 'iPhone 6',
        deviceOrientation: 'portrait',
        version: '9.0',
        platform: 'OS X 10.10'
    },
    /*'ipad': {
        base: 'SauceLabs',
        browserName: 'iphone',
        deviceName: 'iPad Retina',
        deviceOrientation: 'portrait',
        version: '9.0',
        platform: 'OS X 10.10'
    },*/
    'android': {
        base: 'SauceLabs',
        browserName: 'android',
        deviceName: 'Android Emulator',
        deviceOrientation: 'portrait',
        version: '5.1',
        platform: 'Linux'
    }
};

function getCommandLineFlags() {
    var flags = {};
    process.argv.forEach(function(arg) {
        if (arg.indexOf("--") == 0){
            if (arg.indexOf("=") > -1){
                var tmp = arg.match(/^--([\w\d]+)=([\w\d,]+)$/);
                if (tmp){
                    flags[tmp[1]] = tmp[2].indexOf(",") > -1 ? tmp[2].split(",") : tmp[2];
                }
            }
            else {
                flags[arg.replace("--", "")] = true;
            }
        }
    });
    return flags;
}



module.exports = function(config) {

    var launchers = {};
    var globals = getCommandLineFlags();

    if (globals.browsers){
        Object.keys(customLaunchers).filter(function(k) {
            return globals.browsers.indexOf(k) > -1;
        }).forEach(function(k) {
            launchers[k] = customLaunchers[k];
        });
    }
    else {
         launchers = customLaunchers;
    }

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['qunit'],


        // list of files / patterns to load in the browser
        files: [
            'node_modules/sinon/pkg/sinon-1.16.1.js',
            'tests/polyfill/*.js',
            'tests/env.js',
            'dist/dom-events.js',
            'tests/importer.js',
            'tests/suite/*.js'
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots', 'saucelabs'],


        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: Object.keys(customLaunchers),


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,


        sauceLabs: {
            testName: 'dom-events.js'
        },

        captureTimeout: 120000,

        customLaunchers: launchers

    });
};