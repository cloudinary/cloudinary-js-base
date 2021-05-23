
/**
 * @description Defines the available modes to use with the improve effect.
 * @namespace ImproveMode
 * @memberOf Qualifiers
 * @see To be used with an {@link Actions.Adjust.improve|Adjust Improve}
 * @example
 * import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";
 * import {outdoor} from "@cloudinary/base/qualifiers/improveMode";
 * import {improve} from "@cloudinary/base/actions/adjust";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.adjust(improve().mode(outdoor()));
 */



/**
 * @summary qualifier
 * @memberOf Qualifiers.ImproveMode
 * @description Use this mode to get better results on outdoor images.
 * @return string
 */
function outdoor(): string {
  return 'outdoor';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.ImproveMode
 * @description Use this mode to get better results on images with indoor lighting and shadows.
 * @return string
 */
function indoor(): string {
  return 'indoor';
}

const ImproveMode = {
  indoor,
  outdoor
};

export {outdoor, indoor, ImproveMode};

