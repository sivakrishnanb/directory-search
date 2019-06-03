# Directory Search for 'TODO' text

Search through the given folder and list the files which matches 'TODO' text.

## Prerequisites

Solution doesn't depends on any of the node module packages for development. Have used Mocha & Chai for unit testing only.

## Usage

### Import and use the search library

#### Using await to resolve the promise

```
var directorySearch = require("../lib").default;

const results = await directorySearch("search text", "optional directory else will use root directory");
```

#### Using traditional Promise with then and catch

```
var directorySearch = require("../lib").default;

directorySearch("search text", "optional directory else will use root directory")
    .then(results => console.log(results))
    .catch(error => console.log(error));

```
### Example

#### To search in the root folder

```
var directorySearch = require("../lib").default;

const results = await directorySearch("TODO");
```

#### To search in the given folder

```
var directorySearch = require("../lib").default;

const results = await directorySearch("TODO", "sample-folder");
```

## Getting Started

As the development environment doesn't depend on any other node modules, it is good enough to just start the server with below command. Server will be started in port 3000

```
npm start
```

Navigate to

```
http://localhost:3000
```

You should now see a HTML page with 'Fetch Files with TODO' button. Click on the button, to display the files below.

## Running the tests

```
npm install && npm test
```
