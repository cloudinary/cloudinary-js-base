import {BackgroundQualifier} from "./base/BackgroundQualifier";

/**
 * @description A class for blurred background transformations.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BackgroundQualifier}
 */
class BlurredBackgroundAction extends BackgroundQualifier {
  private intensityLevel:number;
  private brightnessLevel:number;

  /**
   * @description Sets the intensity of the blur.
   * @param {number} value - The intensity of the blur.
   */
  intensity(value:number): this {
    this.intensityLevel = value;
    return this;
  }

  /**
   * @description Sets the brightness of the background.
   * @param {number} value - The brightness of the background.
   */
  brightness(value:number): this {
    this.brightnessLevel = value;
    return this;
  }

  /**
   * @description
   * Stringify the qualifier
   * BackgroundQualifiers don't have a value, but instead override the toString() function
   */
  toString(): string {
    // b_blurred:{intensity}:{brightness}
    return `
    b_blurred
    ${this.intensityLevel ? `:${this.intensityLevel}` : ''}
    ${this.brightnessLevel ? `:${this.brightnessLevel}` : ''}
    `.replace(/\s+/g, '');
  }
}

export default BlurredBackgroundAction;
