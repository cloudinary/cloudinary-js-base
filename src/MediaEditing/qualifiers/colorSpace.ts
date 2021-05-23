/**
 * @description Contains functions to select the color space mode.
 * @namespace ColorSpace
 * @memberOf Qualifiers
 * @see Visit {@link Actions.Delivery.colorSpace|Delivery Color Space} for an example
 */

/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function srgb(): string {
  return 'srgb';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function trueColor(): string {
  return 'srgb:truecolor';
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function tinySrgb(): string {
  return 'tinysrgb';
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function cmyk(): string | number {
  return 'cmyk';
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function noCmyk(): string {
  return 'no_cmyk';
}


/**
 * @summary qualifier
 * @memberOf Qualifiers.ColorSpace
 */
function keepCmyk(): string {
  return 'keep_cmyk';
}

const ColorSpace = {
  cmyk,
  keepCmyk,
  noCmyk,
  srgb,
  tinySrgb,
  trueColor
};

export {
  ColorSpace,
  cmyk,
  keepCmyk,
  noCmyk,
  srgb,
  tinySrgb,
  trueColor
};

