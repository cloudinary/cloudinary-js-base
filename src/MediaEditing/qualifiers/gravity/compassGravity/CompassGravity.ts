import {GravityQualifier} from "../GravityQualifier";
import {CompassQualifier} from "../qualifiers/compass/CompassQualifier";

/**
 * @description The class for the CompassGravity builder
 * @memberOf Qualifiers.Gravity
 * @extends {Qualifiers.Gravity.GravityQualifier}
 */
class CompassGravity extends GravityQualifier {
  constructor(dir: CompassQualifier) {
    // Required due to https://github.com/microsoft/TypeScript/issues/13029
    /* istanbul ignore next */
    super(dir);
  }
}

export {CompassGravity};
