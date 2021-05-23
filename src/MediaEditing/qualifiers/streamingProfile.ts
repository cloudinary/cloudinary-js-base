/**
 * @description Qualifiers for applying an ordered dither filter to the image.
 * @namespace StreamingProfile
 * @memberOf Qualifiers
 * @see Visit {@link Actions
 */


/**
 * @summary qualifier
 * @memberOf Qualifiers.StreamingProfile
 * @return {string}
 */
function fullHd():string {
  return 'full_hd';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.StreamingProfile
 * @return {string}
 */
function hd():string {
  return 'hd';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.StreamingProfile
 * @return {string}
 */
function sd():string {
  return 'sd';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.StreamingProfile
 * @return {string}
 */
function fullHdWifi():string {
  return 'full_hd_wifi';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.StreamingProfile
 * @return {string}
 */
function fullHdLean():string {
  return 'full_hd_lean';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.StreamingProfile
 * @return {string}
 */
function hdLean():string {
  return 'hd_lean';
}

const StreamingProfile = {
  hd,
  sd,
  hdLean,
  fullHd,
  fullHdLean,
  fullHdWifi
};


export {
  hd,
  sd,
  hdLean,
  fullHd,
  fullHdLean,
  fullHdWifi,
  StreamingProfile
};
