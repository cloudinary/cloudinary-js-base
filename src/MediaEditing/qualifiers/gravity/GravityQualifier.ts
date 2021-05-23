import {Qualifier} from "../../internal/qualifier/Qualifier";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {CompassGravity} from "./compassGravity/CompassGravity";
import {AutoGravity} from "./autoGravity/AutoGravity";
import {FocusOnGravity} from "./focusOnGravity/FocusOnGravity";
import {FocusOnValue} from "../focusOn";
import {AutoFocus} from "../autoFocus";
import {CompassQualifier} from "./qualifiers/compass/CompassQualifier";
import {XYCenterGravity} from "./xyCenterGravity/XYCenterGravity";

export type IGravity = CompassGravity | AutoGravity | FocusOnGravity | XYCenterGravity;
export type IGravityValue = CompassQualifier | FocusOnValue | AutoFocus;


/**
 * @memberOf Gravity.GravityQualifier
 * @extends {SDK.Qualifier}
 */
class GravityQualifier extends Qualifier {
  /**
   * @param value, an array containing (GravityObject | AutoGravity | string) or a string;
   */
  constructor(value: IGravityValue | IGravityValue[] | string) {
    super('g', new QualifierValue(value));
  }
}

export {GravityQualifier};
