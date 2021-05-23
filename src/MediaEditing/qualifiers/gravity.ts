import {FocusOnValue} from "./focusOn";
import {CompassGravity} from "./gravity/compassGravity/CompassGravity";
import {FocusOnGravity} from "./gravity/focusOnGravity/FocusOnGravity";
import {AutoGravity} from "./gravity/autoGravity/AutoGravity";
import {CompassQualifier} from "./gravity/qualifiers/compass/CompassQualifier";
import {XYCenterGravity} from "./gravity/xyCenterGravity/XYCenterGravity";


/**
 * @description Defines the gravity based on directional values from a compass.
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#control_gravity | Control gravity for images}
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#control_gravity | Control gravity for videos}
 * @param {Qualifiers.Compass} direction A compass Values
 * @memberOf Qualifiers.Gravity
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {compass} from "@cloudinary/base/qualifiers/gravity";
 * import {north} from "@cloudinary/base/qualifiers/compass";
 * import {crop} from "@cloudinary/base/actions/resize";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(compass(north())))
 * @return {CompassGravity}
 */
function compass(direction: CompassQualifier): CompassGravity {
  return new CompassGravity(direction);
}

/**
 * @summary qualifier
 * @description Specifies what to focus on, for example: faces, objects, eyes, etc.
 * @param {...Qualifier.FocusOn} args One or more objects to focus on
 * @memberOf Qualifiers.Gravity
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {focusOn} from "@cloudinary/base/qualifiers/gravity";
 * import {crop} from "@cloudinary/base/actions/resize";
 * import {cat} from "@cloudinary/base/qualifiers/focusOn";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(focusOn(cat())))
 * @return {FocusOnGravity}
 */
function focusOn(...args: FocusOnValue[]): FocusOnGravity {

  const res = [...args];
  return new FocusOnGravity(res);
}

/**
 * @summary qualifier
 * @description Automatically identifies the most interesting regions in the asset, can be qualified further by including what to focus on.
 * @memberOf Qualifiers.Gravity
 * @return {Qualifiers.Gravity.AutoGravity}
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {autoGravity} from "@cloudinary/base/qualifiers/gravity";
 * import {crop} from "@cloudinary/base/actions/resize";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(autoGravity()))
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {autoGravity} from "@cloudinary/base/qualifiers/gravity";
 * import {crop} from "@cloudinary/base/actions/resize";
 * import {cat} from "@cloudinary/base/qualifiers/focusOn";
 * import {AutoFocus} from "@cloudinary/base/qualifiers/autoFocus";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(autoGravity().autoFocus(AutoFocus.focusOn(cat()))))
 */
function autoGravity(): AutoGravity {
  return new AutoGravity();
}


/**
 * @summary qualifier
 * @description Set the center of gravity to the given x & y coordinates.
 * @memberOf Qualifiers.Gravity
 * @return {XYCenterGravity}
 */
function xyCenter(): XYCenterGravity {
  return new XYCenterGravity();
}


/**
 * @description A qualifier that determines which part of an asset to focus on, and thus which part of the asset to keep, </br>
 *              when any part of the asset is cropped. For overlays, this setting determines where to place the overlay.
 * @namespace Gravity
 * @memberOf Qualifiers
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {compass} from "@cloudinary/base/qualifiers/gravity";
 * import {north} from "@cloudinary/base/qualifiers/compass";
 * import {crop} from "@cloudinary/base/actions/resize";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.resize(crop().width(300).gravity(compass(north())))
 *
 * // Expand every function separately to see its own example
 */
const Gravity = {
  compass: compass,
  autoGravity: autoGravity,
  focusOn: focusOn,
  xyCenter
};

export {
  Gravity,
  compass,
  autoGravity,
  focusOn,
  xyCenter
};
