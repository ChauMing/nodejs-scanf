# nodejs-scanf [![Build Status](https://travis-ci.org/ChauMing/nodejs-scanf.svg?branch=master)](https://travis-ci.org/ChauMing/nodejs-scanf) [![npm](https://img.shields.io/npm/l/express.svg)]()

scanf for node.js :alien:

## Install

```shell
npm i nodejs-scanf
```

## Example

+ scanf

  read stdin async.

  params: `format`, `handler`

  `format`: 

  ````
  %s string
  %d integer
  %f float
  %c character
  ````

  ```javascript
  let {scanf} = require('nodejs-scanf');

  // input: 'hello world'
  scanf('%s', function(str) {
    console.log(str);  // output: //hello
  });

  // input: 'hello 2017'
  scanf('%s %d', function(str, integer) {
    console.log(str, integer); // output: //hello 2017
  });

  // input: '2017-04-06'
  scanf('%d-%d-%d', function(year, month, day) {
  						
  })
  ```

+ scanfSync

  read stdin sync

  params: `format`

  return a array

  ```javascript
  let {scanfSync} = require(nodejs-scanf);

  let [year, month, day] = scanfSync('%d-%d-%d');

  let [welcome, year] = scanfSync('%s,%d');
  // input welcome,2017
  //welcome: 'welcome'
  // year: 2017
  ```

+ sscanf

  read input string

  params: `input`, `format`, `handler`

  ```javascript
  sscanf('2017-4-06', '%d-%d-%d', function(year, month, day) {
    
  })
  ```



# License

MIT

