import Action from "../../sdk/Action";
import QualifierValue from "../../sdk/qualifier/QualifierValue";
import Qualifier from "../../sdk/qualifier/Qualifier";
import {prepareColor} from "../../sdk/utils/prepareColor";
import {SystemColors} from "../../values/color";

/**
 * @description Applies a shadow filter to the asset.
 * @class ShadowEffectAction
 * @augments Action
 */
class ShadowEffectAction extends Action {
  private effectType: string;

  constructor(effectType: string, strength: number) {
    super();

    this.effectType = effectType;
    this.addQualifier(new Qualifier('e', new QualifierValue(['shadow', strength])));
  }

  /**
   * @description The strength of the shadow. (Range: 0 to 100, Server default: 40)
   * @param {number} strength
   * @return {this}
   */
  strength(strength: number): this {
    return this.addQualifier(new Qualifier('e', new QualifierValue(['shadow', strength])));
  }

  /**
   * @description The X offset the shadow
   * @param {number} x
   * @return {this}
   */
  offsetX(x:number): this {
    return this.addQualifier(new Qualifier('x', new QualifierValue(x)));
  }

  /**
   * @description The Y offset the shadow
   * @param {number} y
   * @return {this}
   */
  offsetY(y:number): this {
    return this.addQualifier(new Qualifier('y', new QualifierValue(y)));
  }

  /**
   * @description The color of the shadow (Server default: gray)
   * @param color
   * @return {this}
   */
  color(color:SystemColors): this {
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
  }
}


export {ShadowEffectAction};
