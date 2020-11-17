# Utilities for logs
A Node package for print logs in console and in GCP

## Releases

### Versioning of releases

1.2.1

> Given this version there are the following changes :
>
> 1. MINOR Removed bunyan and @google-cloud/logging-bunyan dependencies in this package

1.2.0

> Given this version there are the following changes :
>
> 1. MAJOR Added *logger* parameter for gcp log methods

1.1.0

> Given this version there are the following changes :
>
> 1. MAJOR change *logJson* method name by *json* method name
> 2. MAJOR Added methods for logs in GCP or in local runtime
> 3. MINOR Added bunyan and @google-cloud/logging-bunyan dependencies for logs in GCP

1.0.1

> Given this version there are the following changes :
>
> 1. MINOR Refix of methods

1.0.0

> Given this version there are the following changes :
>
> 1. MAJOR First implementation with logJson method

## Installation


```
npm install ut-logs
```

## Log a Content with bunyan for GCP

Install additional dependencies in your project:

```
npm install bunyan

npm install @google-cloud/logging-bunyan
```

This is useful for managing logs and debug process.

```
const utLogs = require('ut-logs');

var projectName = 'ut-logs_test'
const bunyan = require('bunyan');
const { LoggingBunyan } = require('@google-cloud/logging-bunyan');
const loggingBunyan = new LoggingBunyan();
const logger = bunyan.createLogger({
    name: projectName,
    streams: [
        { stream: process.stdout, level: 'info' },
        loggingBunyan.stream('info')
    ],
});

utLogs.gcpInfo(logger, projectName, 'log message')
utLogs.gcpError(logger, projectName, 'log message')
utLogs.gcpInfoDate(logger, projectName, 'log message')
utLogs.gcpErrorDate(logger, projectName, 'log message')
```

Output:

```
ut-logs_test|log message
ut-logs_test|log message
ut-logs_test|2020-11-17 14:12:38|log message
ut-logs_test|2020-11-17 14:12:38|log message
```

## Log a Json Content

This is useful for managing logs and debug process.


```
const utLogs = require('ut-logs');

var json = {
    "clients": [{
        "first_name": "John",
        "last_name": "Doe"
    }, {
        "first_name": "Anna",
        "last_name": "Smith"
    }]
}

utLogs.json(json)
```