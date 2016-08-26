/**
 * Created by ab185330 on 5/23/2016.
 */
var loginPage = require('../../pages/loginPage');
var settings = require('../../common/settings');
var assert = require('assert');
var getPageTimeout = settings.config.STEPTIMEOUT;

module.exports = function () {

    this.Then(/^Email field present$/, function (callback) {
        this.waitForElementVisible(loginPage.emailTextBox, getPageTimeout, function (isElementVisible) {
            assert.equal(isElementVisible.value, true);
            callback();
        });
    });

    this.Then(/^Full Name field present$/, function (callback) {
        this.waitForElementVisible(loginPage.fullNameTextBox, getPageTimeout, function (isElementVisible) {
            assert.equal(isElementVisible.value, true);
            callback();
        });
    });

    this.Then(/^Username field present$/, function (callback) {
        this.waitForElementVisible(loginPage.userName, getPageTimeout, function (isElementVisible) {
            assert.equal(isElementVisible.value, true);
            callback();
        });
    });

    this.Then(/^Password field present$/, function (callback) {
        this.waitForElementVisible(loginPage.userPassword, getPageTimeout, function (isElementVisible) {
            assert.equal(isElementVisible.value, true);
            callback();
        });
    });

};