import {Qualifier} from "../../internal/qualifier/Qualifier";
import ResizeAdvancedAction from "./ResizeAdvancedAction";


/**
 * @description Defines how to crop an asset
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeCropAction extends ResizeAdvancedAction {
  /**
   * @description Horizontal position for custom-coordinates based cropping.
   * @param {number} x The x position.
   */
  x(x: number | string): this {
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description Vertical position for custom-coordinates based cropping
   * @param {number} y The y position.
   */
  y(y: number | string): this {
    return this.addQualifier(new Qualifier('y', y));
  }
}


export default ResizeCropAction;
