/**
 * @description Contains functions to select the font hinting setting.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#adding_text_overlays | Adding text overlays to images}
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_captions | Adding text overlays to videos}
 * @memberOf Qualifiers
 * @namespace FontHinting
 * @see To be used with {@link Qualifiers.TextStyle|Text Style}
 */


/**
 * @summary qualifier
 * @memberOf Qualifiers.FontHinting
 */
function none(): string {
  return '';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontHinting
 */
function slight(): string {
  return 'slight';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontHinting
 */
function medium(): string {
  return 'medium';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontHinting
 */
function full(): string {
  return 'full';
}

const FontHinting = {full, none, medium, slight};

export {
  FontHinting,
  full,
  none,
  medium,
  slight
};
