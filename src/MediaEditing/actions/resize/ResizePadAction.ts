import {BackgroundQualifier} from "../../qualifiers/background/shared/base/BackgroundQualifier";
import {IGravity} from "../../qualifiers/gravity/GravityQualifier";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import ResizeAdvancedAction from "./ResizeAdvancedAction";


/**
 * @description Defines an advanced resize with padding.
 * @extends Actions.Resize.ResizeAdvancedAction
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizePadAction<GravityType extends IGravity> extends ResizeAdvancedAction {
  /**
   * @description Sets the background.
   * @param {Qualifiers.Background} backgroundQualifier Defines the background color to use instead of
   * transparent background areas or when resizing with padding.
   */
  background(backgroundQualifier: BackgroundQualifier): this {
    return this.addQualifier(backgroundQualifier);
  }

  gravity(direction: GravityType): this {
    return this.addQualifier(direction);
  }

  /**
   * @description Horizontal position for custom-coordinates based padding.
   * @param {number} x The x position.
   */
  offsetX(x: number | string): this {
    return this.addQualifier(new Qualifier('x', x));
  }

  /**
   * @description Vertical position for custom-coordinates based padding
   * @param {number} y The y position.
   */
  offsetY(y: number | string): this {
    return this.addQualifier(new Qualifier('y', y));
  }
}


export default ResizePadAction;
