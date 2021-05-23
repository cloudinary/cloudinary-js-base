import {Action} from "../../internal/Action";
import {stringOrNumber} from "../../backwards/types";

/**
 * @description Skews the image according to the two specified values in degrees.
 * @extends SDK.Action
 * @memberOf Actions.Reshape
 * @see Visit {@link Actions.Reshape| Reshape} for examples
 */
class ShearAction extends Action {
  private _x: stringOrNumber;
  private _y: stringOrNumber;

  constructor(x: stringOrNumber, y:stringOrNumber) {
    super();
    this.skewX(x);
    this.skewY(y);
  }
  /**
   * @param {number} x Skews the image according to the two specified values in degrees. (X and Y)
   */
  skewX(x: stringOrNumber): this {
    this._x = x;
    return this;
  }

  /**
   * @param {number} y Skews the image according to the two specified values in degrees. (X and Y)
   */
  skewY(y: stringOrNumber): this {
    this._y = y;
    return this;
  }

  toString(): string {
    return [
      'e_shear',
      this._x,
      this._y
    ].filter((a) => a).join(':');
  }
}


export {ShearAction};
