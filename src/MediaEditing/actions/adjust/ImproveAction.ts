import {Action} from "../../internal/Action";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {stringOrNumber} from "../../backwards/types";

/**
 * @description Defines how to improve an image by automatically adjusting image colors, contrast and brightness.</br>
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/image_transformations#image_improvement_effects | Image improvement effects}
 * @memberOf Actions.Adjust
 */
class ImproveAction extends Action {
  private modeValue:stringOrNumber;
  private blendValue:number;
  constructor() {
    super();
  }

  /**
   *
   * @description The improve mode.
   * @param {Qualifiers.ImproveMode | string} value
   */
  mode(value: 'outdoor' | 'indoor' | stringOrNumber): this {
    this.modeValue = value;
    return this;
  }

  /**
   * @description How much to blend the improved result with the original image, where 0 means only use the original and 100 means only use the improved result. (Range: 0 to 100, Server default: 100)
   * @param {number} value
   */
  blend(value:number): this {
    this.blendValue = value;
    return this;
  }

  protected prepareQualifiers(): this {
    const qualifierValue = new QualifierValue(['improve', this.modeValue, this.blendValue]).setDelimiter(':');
    this.addQualifier(new Qualifier('e', qualifierValue));
    return this;
  }
}

export {ImproveAction};
