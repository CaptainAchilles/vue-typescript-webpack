const assert = require("assert");

module.exports = {
    'default e2e tests': function (browser) {
        // automatically uses dev Server port from /config.index.js
        // default: http://localhost:8080
        // see nightwatch.conf.js
        const devServer = browser.globals.devServerURL;

        browser
            .url(devServer)
            .waitForElementVisible('#main', 1000)
            .assert.elementPresent('.winner')
            .assert.containsText('.winner', 'THIS PAGE IS INTENTIONALLY STYLED POORLY');

        browser.click("ul li:first-of-type", function () {
            browser.elements("css selector", "ul li", function (elements) {
                assert.equal(4, elements.value.length);
                browser.click("ul li:first-of-type", function () {
                    browser.elements("css selector", "ul li", function (elements) {
                        assert.equal(1, elements.value.length);
                        browser.end();
                    });
                });
            })
        });
    }
}
