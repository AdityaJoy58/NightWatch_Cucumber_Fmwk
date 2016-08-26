/**
 * Created by ab185330 on 5/23/2016.
 */

var loginPage = require('../../pages/loginPage');
var settings = require('../../common/settings');
var assert = require('assert');
var getPageTimeout = settings.config.STEPTIMEOUT;

module.exports = function () {

    this.Given(/^Instagram application is loaded$/, function (callback) {
        this
            .url(loginPage.url)
            .waitForElementVisible(loginPage.emailTextBox, getPageTimeout)
        callback();
    });

    this.When(/^Home page appears$/, function (callback) {
        this.waitForElementVisible(loginPage.emailTextBox, getPageTimeout, function (isElementVisible) {
            assert.equal(isElementVisible.value,true);
            callback();
        });
    });

    this.Then(/^Login with Facebook button present$/, function (callback) {
        this.waitForElementVisible(loginPage.logInWithFacebookButton, getPageTimeout, function (isElementVisible) {
            assert.equal(isElementVisible.value,true);
            callback();
        });
    });

    this.Then(/^SignUp button present$/, function (callback) {
        this.waitForElementVisible(loginPage.signUpButton, getPageTimeout, function (isElementVisible) {
            assert.equal(isElementVisible.value,true);
            callback();
        });
    });
};