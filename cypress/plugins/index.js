const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
    on('file:processor', cucumber)
}