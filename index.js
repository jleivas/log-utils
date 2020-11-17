const logJson = require('./src/logJson')

exports.logJson = (json) => {
    return logJson.logJson(json)
}

var json = {
    "clients": [{
        "first_name": "John",
        "last_name": "Doe"
    }, {
        "first_name": "Anna",
        "last_name": "Smith"
    }]
}

logJson.logJson(json)