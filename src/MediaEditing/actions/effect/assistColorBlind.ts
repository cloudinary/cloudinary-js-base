import {Action} from "../../internal/Action";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @description Applies stripes to the image to help people with common color-blind conditions to differentiate between colors that are similar for them.
 *              You can replace colors using the xray() method.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class AssistColorBlindEffectAction extends Action {
  constructor() {
    super();
    this.addQualifier(new Qualifier('e', new QualifierValue('assist_colorblind')));
  }

  /**
   * @description Replaces problematic colors with colors that are easier to differentiate.
   * @return {this}
   */
  xray(): this{
    return this.addQualifier(new Qualifier('e', new QualifierValue(['assist_colorblind', 'xray']).setDelimiter(':')));
  }

  /**
   * @description Applies stripes of the specified intensity to help people with common color blind conditions to differentiate between colors that are similar for them.
   * @param {number | string} strength The intensity of the stripes. (Range: 1 to 100, Server default: 10)
   * @return {this}
   */
  stripesStrength(strength:number | string): this {
    return this.addQualifier(new Qualifier('e', new QualifierValue(['assist_colorblind', strength]).setDelimiter(':')));
  }
}

export {AssistColorBlindEffectAction};


