import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {prepareColor} from "../../internal/utils/prepareColor";
import {EffectActionWithLevel}from "./EffectActions/EffectActionWithLevel";
import {SystemColors} from "../../qualifiers/color";

/**
 * @description Applies a colorizing filter to the asset, use the methods in the class to adjust the filter
 * @extends EffectActionWithLevel
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class ColorizeEffectAction extends EffectActionWithLevel {
  /**
   * @description The color to use for colorization. Specify HTML name or RGB hex code. (Server default: gray)
   * @param {string} color HTML name(red, green, etc.) or RGB hex code. (Server default: gray)
   * @return {this}
   */
  color(color: SystemColors): this {
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
  }
}


export {ColorizeEffectAction};
