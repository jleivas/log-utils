const utLogs = require('./index')

var projectName = 'ut-logs_test'

var json = { cars: [{ model: 'A4', year: 2020 }, { model: 'X1', year: 2019 }] }

utLogs.json(json)
utLogs.gcpInfo(projectName, 'log message')
utLogs.gcpError(projectName, 'log message')
utLogs.gcpInfoDate(projectName, 'log message')
utLogs.gcpErrorDate(projectName, 'log message')