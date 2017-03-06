const {readStdin, readStdinSync} = require('./lib/readStdin');
const {Readable} = require('stream');
const {parse} = require('./lib/parse');

function scanfSync(format) {
  let str = readStdinSync();
  let result = parse(str, format);
  return result;
}

function scanf(format, handler) {
  readStdin((str) => {
    let result = parse(str, format);
    handler(...result);
  });
}

function sscanfSync(input, format) {
  if(typeof input === 'string' && typeof format === 'string') {
    return parse(input, format);
  }
  return console.error('sscanfSync params must a string or Readable stream')
}

function sscanf(input, format, handler) {
  if(typeof input === 'string' ) {
    let result = parse(input, format);
    return handler(...result);
  }
  if(input instanceof Readable) {
  }
  return console.error('sscanf first params must a string or Readable stream');
}


module.exports = {
  sscanf,
  sscanfSync,
  scanf,
  scanfSync
}