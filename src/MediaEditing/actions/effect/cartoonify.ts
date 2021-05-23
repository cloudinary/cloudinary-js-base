import {Qualifier} from "../../internal/qualifier/Qualifier";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Action} from "../../internal/Action";

/**
 * @description Applies a cartoon effect to an image.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class CartoonifyEffect extends Action {
  private colorReduction: number | string;
  private cartoonifyStrength: number;
  private effectName: string;
  constructor(effectName:string, strength:number) {
    // We don't pass level in the constructor, we'll build it in the prepareParam
    super();
    this.cartoonifyStrength = strength;
    this.effectName = effectName;
  }

  /**
   * @description Sets the thickness of the lines.
   * @param {number} lineStrength The thickness of the lines. (Range: 0 to 100, Server default: 50)
   * @return {this}
   */
  lineStrength(lineStrength: number): this {
    this.cartoonifyStrength = lineStrength;
    return this;
  }

  /**
   * @description Achieves a black and white cartoon effect.
   * @return {this}
   */
  blackwhite(): this {
    this.colorReduction = 'bw';
    return this;
  }

  /**
   * @description
   * Sets the decrease in the number of colors and corresponding saturation boost of the remaining colors. <br/>
   * Higher reduction values result in a less realistic look.
   * @param {number } level The decrease in the number of colors and corresponding saturation boost of the remaining colors. (Range: 0 to 100, Server default: automatically adjusts according to the line_strength value). Set to 'bw' for a black and white cartoon effect.
   * @return {this}
   */
  colorReductionLevel(level: number): this {
    this.colorReduction = level;
    return this;
  }

  protected prepareQualifiers(): void {
    this.addQualifier(new Qualifier('e', new QualifierValue([this.effectName, this.cartoonifyStrength, this.colorReduction])));
    return;
  }
}



export {CartoonifyEffect};
