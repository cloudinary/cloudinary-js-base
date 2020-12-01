import QualifierValue from "../../qualifier/QualifierValue";
import Qualifier from "../../qualifier/Qualifier";
import {prepareColor} from "../../utils/prepareColor";
import EffectActionWithLevel from "./EffectActions/EffectActionWithLevel";
import {SystemColors} from "../../values/color/Color";

/**
 * @class ColorizeEffectAction
 * @augments EffectActionWithLevel
 * @description Applies a colorizing filter to the asset, use the methods in the class to adjust the filter
 */
class ColorizeEffectAction extends EffectActionWithLevel {
  /**
   * @description The color to use for colorization. Specify HTML name or RGB hex code. (Server default: gray)
   * @param {string} color HTML name(red, green, etc.) or RGB hex code. (Server default: gray)
   * @return {this}
   */
  color(color: SystemColors) {
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
  }
}

/**
 * @description Applies a colorizing filter to the asset.
 * @memberOf Actions.Effect
 * @param {number} colorizeLevel The strength of the color. (Range: 0 to 100, Server default: 100)
 * @return {ColorizeEffectAction}
 */
function colorize(colorizeLevel?: number):ColorizeEffectAction {
  return new ColorizeEffectAction('colorize', colorizeLevel);
}

export default colorize;
