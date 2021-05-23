import RoundCornersAction from "./RoundCornersAction";


/**
 * @summary action
 * @description Generates an asset with a circular crop using the 'max' radius value.
 * @memberOf Actions.RoundCorners
 * @return {Actions.RoundCorners.RoundCornersAction}
 */
function max():RoundCornersAction {
  return new RoundCornersAction().max();
}

export default max;
