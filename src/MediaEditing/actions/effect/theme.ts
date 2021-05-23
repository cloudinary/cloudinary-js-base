import {Qualifier} from "../../internal/qualifier/Qualifier";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Action} from "../../internal/Action";
import {SystemColors} from "../../qualifiers/color";

/**
 * @description Changes the main background color to the one specified, as if a 'theme change' was applied (e.g. dark mode vs light mode).
 * @extends SDK.Action
 * @memberOf {Actions.Effect}
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class ThemeEffect extends Action {
  private color: SystemColors;
  private _photosensitivity: number;
  private effectName = 'theme';

  constructor(color:SystemColors) {
    super();
    this.color = color;
  }

  /**
   * @description The sensitivity to photographic elements of an image.
   *              A value of 0 treats the whole image as non-photographic.
   *              A value of 200 treats the whole image as photographic, so no theme change is applied.
   * @param {number} photosensitivity
   * @return {this}
   */
  photosensitivity(photosensitivity: number): this {
    this._photosensitivity = photosensitivity;
    return this;
  }


  protected prepareQualifiers(): void {
    const sensitivity = this._photosensitivity ? `:photosensitivity_${this._photosensitivity}` : '';
    // Replace # in hex colors (#fff -> fff)
    const val = `${this.effectName}:color_${this.color.replace('#', '')}${sensitivity}`;

    this.addQualifier(new Qualifier('e', new QualifierValue(val)));
    return;
  }
}



export {ThemeEffect};
