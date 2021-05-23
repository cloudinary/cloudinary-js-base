import ResizeSimpleAction from "./ResizeSimpleAction";
import {GravityQualifier} from "../../qualifiers/gravity/GravityQualifier";

/**
 * @description Defines a scaling resize action.
 * @extends Actions.Resize.ResizeSimpleAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ScaleAction extends ResizeSimpleAction {
  /**
   * @description Changes the aspect ratio of an image while retaining all important content and avoiding unnatural
   * distortions.
   * @return {this}
   */
  liquidRescaling(): this {
    return this.addQualifier(new GravityQualifier('liquid'));
  }
}


export {ScaleAction};
