const date = require('date-and-time');
const bunyan = require('bunyan')
const { LoggingBunyan } = require('@google-cloud/logging-bunyan')
const loggingBunyan = new LoggingBunyan()
const logger = bunyan.createLogger({
    name: 'no-PROJECT_NAME',
    streams: [
        { stream: process.stdout, level: 'info' },
        loggingBunyan.stream('info')
    ],
})

function fnLogger(projectName, arg, isError, isDate) {
    var now = date.format(new Date(), 'YYYY-MM-DD HH:mm:ss')
    var message = arg
    if (isDate) {
        message = now + '|' + message
    }
    if (projectName) {
        message = projectName + '|' + message
    }
    if (!process.env.PROJECT_ID) {
        console.log(message);
    } else {
        if (projectName) {
            logger = bunyan.createLogger({
                name: projectName,
                streams: [
                    { stream: process.stdout, level: 'info' },
                    loggingBunyan.stream('info')
                ],
            })
        }
        if (isError) {
            logger.error(message);
        } else {
            logger.info(message);
        }
    }
}

exports.gcpInfoLogsDate = (projectName, content) => {
    fnLogger(projectName, content, false, true)
}

exports.gcpErrorLogsDate = (projectName, content) => {
    fnLogger(projectName, content, true, true)
}

exports.gcpInfoLogs = (projectName, content) => {
    fnLogger(projectName, content, false, false)
}

exports.gcpErrorLogs = (projectName, content) => {
    fnLogger(projectName, content, true, false)
}