import {Action} from "../../internal/Action";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {prepareColor} from "../../internal/utils/prepareColor";
import {SystemColors} from "../../qualifiers/color";
import {ExpressionQualifier} from "../../qualifiers/expression/ExpressionQualifier";

/**
 * @description Applies a shadow filter to the asset.
 * @memberOf Actions.Effect
 * @extends SDK.Action
 * @see Visit {@link Actions.Effect|Effect} for an example
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
   * @param {number | SDK.ExpressionQualifier} x
   * @return {this}
   */
  offsetX(x:number | ExpressionQualifier): this {
    return this.addQualifier(new Qualifier('x', new QualifierValue(x)));
  }

  /**
   * @description The Y offset the shadow
   * @param {number | SDK.ExpressionQualifier} y
   * @return {this}
   */
  offsetY(y:number | ExpressionQualifier): this {
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
