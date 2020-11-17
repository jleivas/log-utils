# logUtils
A Node package for print logs in console and in GCP

## Installation


```
npm install log-utils
```

## Log a Json Content

This is useful for managing logs and debug process.


```
const logUtils = require('log-utils');

var json = {
    "clients": [{
        "first_name": "John",
        "last_name": "Doe"
    }, {
        "first_name": "Anna",
        "last_name": "Smith"
    }]
}

logUtils.logJson(json)
```


## Releases

### Versioning of releases

1.0.0

> Given this version there are the following changes :
>
> 1. MAJOR First implementation with logJson method