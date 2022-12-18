var request = require ('request')

module.exports = {
    Request: function () {
        request ({
            url: 'https://raw.githubusercontent.com/5e-bits/5e-database/main/src/5e-SRD-Skills.json',
            json: true
        }, (error, response, body) => {
            !error && response.statusCode === 200
                ? console.log (body)
                : console.log (error)
        })
    }
}