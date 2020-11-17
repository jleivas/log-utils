const logJson = require('./src/logJson')
const gcpLogs = require('./src/gcpLogs')

exports.json = (json) => {
    return logJson.logJson(json)
}
exports.gcpInfoDate = (projectName, content) => {
    return gcpLogs.gcpInfoLogsDate(projectName, content)
}

exports.gcpErrorDate = (projectName, content) => {
    return gcpLogs.gcpErrorLogsDate(projectName, content, true, true)
}

exports.gcpInfo = (projectName, content) => {
    return gcpLogs.gcpInfoLogs(projectName, content, false, false)
}

exports.gcpError = (projectName, content) => {
    return gcpLogs.gcpErrorLogs(projectName, content, false, false)
}