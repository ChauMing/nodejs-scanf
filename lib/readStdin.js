const fs = require('fs');

const BUFSIZE = 512;

function readStdinSync() {
  let stdinFd = ('win32' === process.platform) ? 
                  process.stdin.fd : 
                  fs.openSync('/dev/stdin', 'rs');
  

  let buf = Buffer.alloc(BUFSIZE);
  let bytesRead = 0
  try {
     bytesRead = fs.readSync(stdinFd, buf, 0, BUFSIZE);
  } catch(error) {
    console.trace(error);
  }

  if(bytesRead === 0) {
    return ''
  }
  return buf.toString('utf8');
}

function readStdin(handler) {
    let buf = Buffer.alloc(BUFSIZE);

    fs.open('/dev/stdin', 'rs', (error, stdinFd) => {
      if(error) {
        return console.trace(error);
      }
      fs.read(stdinFd, buf, 0, BUFSIZE, null, (error, bytesRead, buffer) => {
        if(error) {
          return console.trace(error);
        }
        if(bytesRead === 0) {
          handler('');
        }
        let str = buffer.toString('utf8');
        handler(str);
      })
    })
}

module.exports = {
  readStdinSync,
  readStdin
}