module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#main', 1000)
      .assert.elementPresent('.winner')
      .assert.containsText('.winner', 'THIS PAGE IS INTENTIONALLY STYLED POORLY')
      .end()
  }
}
