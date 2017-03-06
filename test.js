let {sscanf, scanf, scanfSync, sscanfSync} = require('./index.js');

// let str = sscanfSync('hello', '%s')
scanf('%d', (d) => {
  console.log(d);
})