/**
 * This file is for setting configuration required in test cases
 */
var settings = function () {
    this.constants = {
        'CHAI': 'chai',
        'USERNAME': "test_nr1",
        'PASSWORD': "password_123"
    };
    this.config = {
        'STEPTIMEOUT': 60000
    }
}
module.exports = new settings();

