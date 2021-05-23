/**
 * Rotates or flips an image or video by the specified number of degrees, or automatically (images only) according to its orientation or available metadata.
 * @memberOf Actions
 * @namespace Rotate
 *
 * @example
 * <caption>Rotate by mode</caption>
 * import {Cloudinary} from "@cloudinary/base";
 * import {mode, byAngle} from "@cloudinary/base/actions/rotate";
 * import {autoLeft} from "@cloudinary/base/qualifiers/rotationMode";
 *
 * const yourCldInstance = new Cloudinary({cloud:{cloudName:'demo'}});
 * const image = yourCldInstance.image('woman');
 *
 * // Rotate by mode
 * image.rotate(mode(autoLeft());
 *
 * // Rotate by angle
 * image.rotate(byAngle(90));
 *
 * image.toURL();
 */


import byAngle from "./rotate/byAngle";
import mode from "./rotate/mode";





const Rotate = {byAngle, mode};
export {Rotate, byAngle, mode};
