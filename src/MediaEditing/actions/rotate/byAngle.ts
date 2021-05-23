import RotateAction from "./RotateAction";

/**
 * @summary action
 * @description Rotate an image by the given degrees.
 * @param {number} angle Given degrees. (Range: 0 to 360, Default: 0).
 * @return {Actions.Rotate.RotateAction}
 * @memberOf Actions.Rotate
 */
function byAngle(angle: number) :RotateAction {
  return new RotateAction(angle);
}


export default byAngle;
