/**
 * @description Contains functions to select the font weight.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#adding_text_overlays | Adding text overlays to images}
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_captions | Adding text overlays to videos}
 * @memberOf Qualifiers
 * @namespace FontWeight
 * @see To be used with {@link Qualifiers.TextStyle|Text Style}
 */

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontWeight
 */
function thin(): string {
  return 'thin';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontWeight
 */
function light(): string {
  return 'light';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontWeight
 */
function normal(): string {
  return 'normal';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.FontWeight
 */
function bold(): string {
  return 'bold';
}


const FontWeight = {bold, light, normal, thin};
export {
  FontWeight,
  bold,
  light,
  normal,
  thin
};
