import {NamedRegion} from "./NamedRegion";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @memberOf Qualifiers.Region
 */
class CustomRegion extends NamedRegion {
  constructor() {
    super('named');
  }

  /**
   * @description The x position in pixels.
   * @param {number} x
   */
  x(x: number | string): this {
    this.addQualifier(new Qualifier('x', x));
    return this;
  }

  /**
   * @description The y position in pixels.
   * @param {number} y
   */
  y(y: number | string): this {
    this.addQualifier(new Qualifier('y', y));
    return this;
  }

  /**
   * @description The width of the region in pixels.
   * @param {number} width
   */
  width(width: number): this {
    this.addQualifier(new Qualifier('w', width));
    return this;
  }

  /**
   * @description The height of the region in pixels.
   * @param {number} height
   */
  height(height: number): this {
    this.addQualifier(new Qualifier('h', height));
    return this;
  }
}

export {CustomRegion};
