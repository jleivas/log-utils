const logJson = require('./src/logJson')
const gcpLogs = require('./src/gcpLogs')

exports.json = (json) => {
    return logJson.logJson(json)
}
exports.gcpInfoDate = (logger, projectName, content) => {
    return gcpLogs.gcpInfoLogsDate(logger, projectName, content)
}

exports.gcpErrorDate = (logger, projectName, content) => {
    return gcpLogs.gcpErrorLogsDate(logger, projectName, content, true, true)
}

exports.gcpInfo = (logger, projectName, content) => {
    return gcpLogs.gcpInfoLogs(logger, projectName, content, false, false)
}

exports.gcpError = (logger, projectName, content) => {
    return gcpLogs.gcpErrorLogs(logger, projectName, content, false, false)
}