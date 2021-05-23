import ResizeSimpleAction from "./ResizeSimpleAction";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier";

/**
 * @description Defines an advanced resize.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeAdvancedAction extends ResizeSimpleAction {
  /**
   * @description Which part of the original image to include.
   * @param {Qualifiers.Gravity} gravity
   */
  gravity(gravity: IGravity): this {
    return this.addQualifier(gravity);
  }
}


export default ResizeAdvancedAction;
