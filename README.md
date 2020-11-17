# Utilities for logs
A Node package for print logs in console and in GCP

## Installation


```
npm install ut-logs
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

utLogs.logJson(json)
```


## Releases

### Versioning of releases

1.0.0

> Given this version there are the following changes :
>
> 1. MAJOR First implementation with logJson method

1.0.0

> Given this version there are the following changes :
>
> 1. MINOR Refix of methods