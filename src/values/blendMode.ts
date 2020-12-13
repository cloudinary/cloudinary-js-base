import {BlendModeQualifier} from "./blendMode/BlendModeQualifier";
/**
 * @description Defines the mode of blending to use when overlaying an image.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#overlay_blending_effects|Overlay blending effects}
 * @namespace BlendMode
 * @memberOf Values
 */




/**
 * @memberOf Values.BlendMode
 * @description Add an overlay image blended using the 'multiply' blend mode.
 * @return {Values.BlendMode.BlendModeQualifier}
 */
function multiply():BlendModeQualifier {
  return new BlendModeQualifier('multiply');
}

/**
 * @memberOf Values.BlendMode
 * @description Add an overlay image blended using the 'screen' blend mode.
 * @return {Values.BlendMode.BlendModeQualifier}
 */
function screen():BlendModeQualifier {
  return new BlendModeQualifier('screen');
}

/**
 * @memberOf Values.BlendMode
 * @description Add an overlay image blended using the 'overlay' blend mode.
 * @return {Values.BlendMode.BlendModeQualifier}
 */
function overlay():BlendModeQualifier {
  return new BlendModeQualifier('overlay');
}

const BlendMode = {
  screen,
  multiply,
  overlay
};

export {
  BlendMode,
  screen,
  multiply,
  overlay
};
