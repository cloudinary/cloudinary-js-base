import {Qualifier} from "../../internal/qualifier/Qualifier";
import {Action} from "../../internal/Action";
import {toFloatAsString} from "../../internal/utils/toFloatAsString";
import {AspectRatioQualifierValue} from "../../qualifiers/aspectRatio/AspectRatioQualifierValue";
import {regionRelative, relative} from "../../qualifiers/flag";
import {FlagQualifier} from "../../qualifiers/flag/FlagQualifier";
import {ExpressionQualifier} from "../../qualifiers/expression/ExpressionQualifier";

/**
 * @description Defines a resize using width and height.
 * @extends SDK.Action
 * @memberOf Actions.Resize
 * @see Visit {@link Actions.Resize| Resize} for examples
 */
class ResizeSimpleAction extends Action {
  /**
   * @param {string} cropType
   * @param {number | string} cropWidth The required width of a transformed asset.
   * @param {number | string} cropHeight The required height of a transformed asset.
   */
  constructor(cropType: string, cropWidth: number | string, cropHeight?: number | string) {
    super();
    if (cropWidth) {
      this.addQualifier(new Qualifier('w', cropWidth));
    }
    if (cropHeight) {
      this.addQualifier(new Qualifier('h', cropHeight));
    }
    this.addQualifier(new Qualifier('c', cropType));
  }

  /**
   * @description Sets the height of the resize
   * @param {string | number} x The height in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  height(x: number | string | ExpressionQualifier): this {
    return this.addQualifier(new Qualifier('h', x));
  }

  /**
   * @description Sets the width of the resize
   * @param {string | number} x The width in pixels (if an integer is specified) or as a percentage (if a float is specified).
   */
  width(x: number | string | ExpressionQualifier): this {
    return this.addQualifier(new Qualifier('w', x));
  }

  /**
   * @description Sets the aspect ratio of the asset.
   * For a list of supported types see {@link Qualifiers.AspectRatio |
    * AspectRatio values}
   * @param {number|string} ratio The new aspect ratio, specified as a percentage or ratio.
   * @return {this}
   */
  aspectRatio(ratio: AspectRatioQualifierValue | FlagQualifier | number | string): this {
    // toFloatAsString is used to ensure 1 turns into 1.0
    if (ratio instanceof AspectRatioQualifierValue) {
      return this.addQualifier(new Qualifier('ar', ratio));
    }

    if (typeof ratio === 'number' || typeof ratio === 'string') {
      return this.addQualifier(new Qualifier('ar', toFloatAsString(ratio)));
    }

    if (ratio instanceof FlagQualifier) {
      return this.addFlag(ratio);
    }
  }

  /**
   * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the containing image instead of the added layer.
   * @return {this}
   */
  relative(): this {
    return this.addFlag(relative());
  }

  /**
   * @description Modifies percentage-based width & height parameters of overlays and underlays (e.g., 1.0) to be relative to the overlaid region
   * @return {this}
   */
  regionRelative(): this {
    return this.addFlag(regionRelative());
  }
}


export default ResizeSimpleAction;
