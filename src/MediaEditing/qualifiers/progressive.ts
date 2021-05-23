/**
 * @description Contains functions to select the mode when using a progressive format.
 * <b>Learn more</b>: {@link https://cloudinary.com/documentation/transformation_reference#fl_progressive | Progressive modes}
 * @memberOf Qualifiers
 * @namespace Progressive
 * @example
 * import {Cloudinary} from "@cloudinary/base";
 * import {format} from "@cloudinary/base/actions/delivery";
 * import {jpg} from "@cloudinary/base/qualifiers/format";
 * import {steep} from "@cloudinary/base/qualifiers/progressive";
 *
 * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
 * const image = yourCldInstance.image('woman');
 * image.delivery(format(jpg()).progressive(steep()))
 */
import {FlagQualifier} from "./flag/FlagQualifier";



class ProgressiveQualifier extends FlagQualifier {
  constructor(mode?: string) {
    super('progressive', mode);
  }
}


/**
 * @memberOf Qualifiers.Progressive
 */
function none(): FlagQualifier {
  return new ProgressiveQualifier('none');
}

/**
 * @memberOf Qualifiers.Progressive
 */
function semi(): FlagQualifier {
  return new ProgressiveQualifier('semi');
}

/**
 * @memberOf Qualifiers.Progressive
 */
function steep(): FlagQualifier {
  return new ProgressiveQualifier('steep');
}

/**
 * @memberOf Qualifiers.Progressive
 */
function progressive(): FlagQualifier {
  return new ProgressiveQualifier();
}



const Progressive = {
  semi,
  none,
  steep,
  progressive,
  ProgressiveQualifier
};

export {
  Progressive,
  semi,
  none,
  steep,
  progressive,
  ProgressiveQualifier
};


