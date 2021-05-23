import {Qualifier} from "../../internal/qualifier/Qualifier";
import ResizeAdvancedAction from "./ResizeAdvancedAction";


/**
 * @description Defines how to crop-fill an asset
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeFillAction extends ResizeAdvancedAction {
  /**
   * @description Absolute X position when used with Gravity.xyCenter {@link Qualifiers.Gravity.GravityQualifier}}
   * @param {number} x The x position.
   */
  x(x: number | string): this {
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description Absolute Y position when used with Gravity.xyCenter {@link Qualifiers.Gravity.GravityQualifier}}
   * @param {number} y The y position.
   */
  y(y: number | string): this {
    return this.addQualifier(new Qualifier('y', y));
  }
}


export {ResizeFillAction};
