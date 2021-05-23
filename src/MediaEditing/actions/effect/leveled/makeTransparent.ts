import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction";
import {Qualifier} from "../../../internal/qualifier/Qualifier";
import {QualifierValue} from "../../../internal/qualifier/QualifierValue";
import {prepareColor} from "../../../internal/utils/prepareColor";
import {SystemColors} from "../../../qualifiers/color";

/**
 * @description Makes the background of the image transparent (or solid white for formats that do not support transparency).
 * @extends LeveledEffectAction
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class MakeTransparentEffectAction extends LeveledEffectAction {
  /**
   * @description Sets the tolerance used to accommodate variance in the background color.
   * @param {number | string} value The tolerance used to accommodate variance in the background color. (Range: 0 to 100, Server default: 10)
   */
  tolerance(value: number | string): this {
    return this.setLevel(value);
  }

  /**
   * @description Sets the color to make transparent.
   * @param {string} color The HTML name of the color (red, green, etc.) or RGB hex code.
   * @return {this}
   */
  colorToReplace(color: SystemColors): this {
    return this.addQualifier(new Qualifier('co', new QualifierValue(prepareColor(color))));
  }
}


export {MakeTransparentEffectAction};
