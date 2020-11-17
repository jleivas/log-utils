const date = require('date-and-time');

function fnLogger(logger, projectName, arg, isError, isDate) {
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
        if (isError) {
            logger.error(message);
        } else {
            logger.info(message);
        }
    }
}

exports.gcpInfoLogsDate = (logger, projectName, content) => {
    fnLogger(logger, projectName, content, false, true)
}

exports.gcpErrorLogsDate = (logger, projectName, content) => {
    fnLogger(logger, projectName, content, true, true)
}

exports.gcpInfoLogs = (logger, projectName, content) => {
    fnLogger(logger, projectName, content, false, false)
}

exports.gcpErrorLogs = (logger, projectName, content) => {
    fnLogger(logger, projectName, content, true, false)
}