/**
 * @description Contains functions to select the font antialias setting.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#adding_text_overlays | Adding text overlays to images}
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_captions | Adding text overlays to videos}
 * @memberOf Qualifiers
 * @namespace FontAntialias
 * @see To be used with {@link Qualifiers.TextStyle|Text Style}
 */

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontAntialias
 */
function none(): string {
  return '';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontAntialias
 */
function gray(): string {
  return 'gray';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontAntialias
 */
function subpixel(): string {
  return 'subpixel';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontAntialias
 */
function fast(): string {
  return 'fast';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontAntialias
 */
function good(): string {
  return 'good';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontAntialias
 */
function best(): string {
  return 'best';
}

const FontAntialias = {gray, subpixel, best, fast, none, good};

export {
  FontAntialias,
  gray,
  subpixel,
  best,
  fast,
  none,
  good
};
