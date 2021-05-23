
/**
 * Encode the given string
 * @private
 * @param {string} argString the string to encode
 * @return {string}
 */
export function utf8_encode(argString: string) {
  let c1, enc, n;
  if (argString == null) {
    return "";
  }
  let string = argString + "";
  let utftext = "";
  let start = 0;
  let end = 0;
  let stringl = string.length;
  n = 0;
  while (n < stringl) {
    c1 = string.charCodeAt(n);
    enc = null;
    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode((c1 >> 6) | 192, (c1 & 63) | 128);
    } else {
      enc = String.fromCharCode((c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128);
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = n + 1;
      end = start;
    }
    n++;
  }
  if (end > start) {
    utftext += string.slice(start, stringl);
  }
  return utftext;
};
