import Action from "../Action";
import QualifierValue from "../../qualifier/QualifierValue";
import Qualifier from "../../qualifier/Qualifier";

class Outline extends Action {
  private _mode: string;
  private _width: number | string;
  private _blurLevel : number | string

  constructor() {
    super();
  }

  /**
   * @description
   * How to apply the outline effect which can be one of the following values:
   * inner, inner_fill, outer, fill.
   * @param {string} mode  The type of outline effect. Use the constants defined in Outline.
   */
  mode(mode?: string): this{
    this._mode = mode;
    return this;
  }

  /**
   * The thickness of the outline in pixels. (Range: 1 to 100, Server default: 5)
   * @param {number} width
   */
  width(width?:number | string) {
    this._width = width;
    return this;
  }

  /**
   * @description
   * The level of blur of the outline.
   * Range: 0 to 2000, Server default: 0
   * @param lvl
   */
  blurLevel(lvl?: number | string) {
    this._blurLevel = lvl;
    return this;
  }

  /**
   * @param {string} color One of the SDK Color values, string, or rgba: '#fff'
   * A list of SDK Colors can be found in @cloudinary/base/values/color
   */
  color(color:string) {
    return this.addQualifier(new Qualifier('co', color));
  }

  protected prepareQualifiers() : void {
    this.addQualifier(new Qualifier(
      'e',
      new QualifierValue(['outline', this._mode, this._width, this._blurLevel]).setDelimiter(':'))
    );
  }
}

/**
 * @description Adds an outline to a transparent image. For examples, see the Image Transformations guide.
 * @memberOf Actions.Effect
 * @return {Outline}
 */
function outline(): Outline {
  return new Outline();
}

export default outline;
