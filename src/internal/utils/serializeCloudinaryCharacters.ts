/**
 *
 * @description - Replace (,) and (/) in a string to its URL encoded equivalence
 * @param {string} str
 * @private
 */
function serializeCloudinaryCharacters(str = ''): string {
  const runes = [];
  // Most characters in Javascript uses 16 bits to represent itself.
  // Some characters can exceed the 16bit range
  // It seems our servers are having problems with characters that use more than 16 bits (like some emojis)
  // This fix below iterates over each character and checks if it's more than 16 bits(length > 1)
  // if so, we encode this character
  for(const rune of str) {
    if (rune.length > 1) {
      runes.push(encodeURIComponent(rune));
    } else {
      runes.push(rune);
    }
  }

  return runes.join('')
    .replace(/,/g, '%2C')
    .replace(/\//g, '%2F');
}

export {
  serializeCloudinaryCharacters
};
