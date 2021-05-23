import RotateAction from "./RotateAction";
import {RotationModeQualifierValue} from "../../qualifiers/rotate/RotationModeQualifierValue";

/**
 * @summary action
 * @description Rotate an image by using a rotationMode
 * @param {string} rotationMode
 * For a list of supported rotation modes see {@link Qualifiers.RotationMode| types of rotation modes} for
 * possible values
 * @memberOf Actions.Rotate
 * @return {Actions.Rotate.RotateAction}
 */
function mode(rotationMode: RotationModeQualifierValue | string) :RotateAction {
  return new RotateAction().mode(rotationMode);
}

export default mode;
