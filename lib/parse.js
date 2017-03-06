const RegExpMap = {
  '%d': /\d+/,
  '%s': /\S+/,
  '%f': /\d+\.?\d+/,
  '%c': /\S/
}

function parse(str, format) {
  let formatLen = format.length;
  let strLen = str.length;
  let result = [];

  for(let i = 0, j = 0; i < strLen && j < formatLen; i++, j++) {
    if(str[i] === format[j]) {
      continue;
    }
    if(str[i] !== format && format[j] === '%') {
      let f = format[j] + format[++j];
      let subStr = str.slice(i, strLen);
      let {value, length} = matchFormatString(subStr, f);
      if(value === false)
        return result;
      i += length - 1; 
      result.push(value);
      continue;
    } else {
      return result;
    }
  }
  return result;
}



function matchFormatString(str, format) {
  if(typeof str !== 'string' || typeof format !== 'string') {
    return console.error('matchFormatString params must string');
  }

  let result = str.match(RegExpMap[format]);

  if(result === null) {
    return false;
  }
  result = result[0];

  if(format === '%d' || format === '%f') {
    return {
      value: Number.parseFloat(result),
      length: result.length
    };
  }

  return {
    value: result,
    length: result.length || 0, 
  }
}

module.exports = {
  parse,
  matchFormatString
}