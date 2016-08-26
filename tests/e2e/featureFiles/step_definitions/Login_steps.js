/**
 * Created by ab185330 on 5/2/2016.
 */
var loginPage = require('../../pages/loginPage');
var homePage = require('../../pages/homePage');
var settings = require('../../common/settings');
var assert = require('assert');
var getPageTimeout = settings.config.STEPTIMEOUT;

module.exports = function () {

    this.Given(/^Instagram Application is opened with Sign Up page$/, function (callback) {
        this.url(loginPage.url);
        callback();
    });

    this.When(/^User Click on Log in link/, function (callback) {
        this.waitForElementVisible(loginPage.emailTextBox, getPageTimeout, function () {
            this.click(loginPage.logInLink, function () {
                this.waitForElementVisible(loginPage.userName, getPageTimeout, function (isElementVisible) {
                    assert.equal(isElementVisible.value, true);
                    callback();
                });
            });
        });
    });

    this.Then(/^Enter Username and Password$/, function (callback) {
        this
            .setValue(loginPage.userName, settings.constants.USERNAME)
            .setValue(loginPage.userPassword, settings.constants.PASSWORD);
        callback();
    });

    this.Then(/^Click on Log In button$/, function (callback) {
        this.click(loginPage.logInButton);
        callback();
    });

    this.Then(/^Verify Login Successfully into the Instagram Application$/, function () {
        this.waitForElementVisible(homePage.userSettings, getPageTimeout, function (returnTrueFalse) {
            assert.equal(returnTrueFalse.value, true);
        });
    });

};