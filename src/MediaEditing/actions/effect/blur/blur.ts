import {NamedRegion} from "../../../qualifiers/region/NamedRegion";
import {Qualifier} from "../../../internal/qualifier/Qualifier";
import {Action} from "../../../internal/Action";

/**
 * @description The Action class of the blur Builder.
 * @extends SDK.Action
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class BlurAction extends Action {
  private _region?: NamedRegion;
  private _strength: number | string;

  constructor(strength: number | string) {
    super();
    this._strength = strength;
  }

  /**
   * @description Specifies the region to blur.
   * @param {NamedRegion} blurRegion
   */
  region(blurRegion: NamedRegion): this {
    this._region = blurRegion;
    return this;
  }

  /**
   * @description Sets the strength of the blur effect.
   * @param {number | string} strength
   */
  strength(strength: number | string): this {
    this._strength = strength;
    return this;
  }

  protected prepareQualifiers():void {
    /*
     * Blur with region is a unique object in this codebase.
     * On top of Blur being an Action with Qualifiers,
     * it also accepts a Qualifier called Region.
     *
     * This Qualifier is in itself composite of qualifiers (such as height, or width).
     * The existence of Region changes the output of Blur in non traditional ways
     * which forced this relatively ad-hoc implementation.
     *
     * Aside from all of that, all of the Qualifiers in the component should be alphabetized
     * This happens naturally in the Action class,
     * however since we're dealing with two levels of qualifiers (Blur and Region),
     * these need to be merged.
     *
     * This function will merge the Region qualifiers with Blur
     * and add all needed implicit qualifiers (like g_ocr_text).
     * We're not using the full Gravity Qualifier here to prevent the code import for such a simplistic case
     */

    const str = this._strength ? `:${this._strength}` : '';
    if ('_region' in this) {
      const qualifiers = this._region.qualifiers;
      // Copy qualifiers from the region "action" to the blur action
      qualifiers.forEach((q) => this.addQualifier(q));

      if (this._region.regionType === 'named') {
        this.addQualifier(new Qualifier('e', `blur_region${str}`));
      }

      if (this._region.regionType === 'ocr_text') {
        this.addQualifier(new Qualifier('e', `blur_region${str}`));
        this.addQualifier(new Qualifier('g', `ocr_text`));
      }

      if (this._region.regionType === 'faces') {
        this.addQualifier(new Qualifier('e', `blur_faces${str}`));
      }
    } else {
      this.addQualifier(new Qualifier('e', `blur${str}`));
    }
  }
}


export {BlurAction};
