# log-to-file

[![NPM Downloads][downloads-image]][downloads-url]

## Description

Enhanced logger for NodeJS

## Installation

```sh
npm install betterlogs --save
```

## Using

```js
// Import.
const log = require("betterlogs");

// Save log to ./logs/DATE.log
log("/web/server", "Some data");

// Save log to custom log file "my-log.log".
log("/bot/index", "Another data", "my-log.log");
```

## Using file logger standalone

```js
const fileLogger = require("betterlogs").file;

// Simple file logs
fileLogger("file.log", "text");
```

## Log samples

```
May 12th 2022, 8:30:21 pm -> [/web/server] : Some logs from web server
May 12th 2022, 8:30:44 pm -> [/bot/index] : Some logs from bot
```

## License

## RD-1 MIT

Copyright © 2022 Rafe Daniels & Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[downloads-image]: https://img.shields.io/npm/dm/betterlogs.svg
[downloads-url]: https://npmjs.org/package/betterlogs
