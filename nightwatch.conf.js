var seleniumServer = require('selenium-server');
var chromedriver = require('chromedriver');
var iedriver = require('iedriver');

var nightwatchCucumber = require('nightwatch-cucumber')({
    featureFiles: 'tests/e2e/featureFiles',
    stepDefinitions: 'tests/e2e/featureFiles/step_definitions',
})
module.exports = {
    src_folders: [nightwatchCucumber],
    custom_commands_path: '',
    custom_assertions_path: '',
    globals_path: '',
    page_objects_path: '',
    live_output: false,
    disable_colors: false,
    //test_workers: { // For Parallel Execution
    //  enabled: true,
    //  workers: 'auto'
    // },

    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 4444
    },

    test_settings: {
        default: {
            launch_url: 'http://localhost',
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: false,
                path: 'screenshots/default'
            },
            // To run the tests in Firefox browser
            // replace the below desiredCapabilities block with
            // desiredCapabilities block present in firefox block
            desiredCapabilities: {
                browserName: 'chrome', //firefox or internet explorer
                javascriptEnabled: true,
                acceptSslCerts: true
            }
        },
    //For Parallel & Multi Browser support execution
    chrome: {
        desiredCapabilities: {
            browserName: 'chrome',
            javascriptEnabled: true,
            acceptSslCerts: true
        }
    },

    firefox: {
        desiredCapabilities: {
            browserName: 'firefox',
            javascriptEnabled: true,
            acceptSslCerts: true
        }
    }
  }
}