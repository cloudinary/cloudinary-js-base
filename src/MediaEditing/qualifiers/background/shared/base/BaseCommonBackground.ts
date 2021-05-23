import {prepareColor} from "../../../../internal/utils/prepareColor";
import {BackgroundQualifier} from "./BackgroundQualifier";
import {SystemColors} from "../../../color";

/**
 * @description Defines the background color to use when resizing with padding.
 * @memberOf Qualifiers.Background
 * @extends {Qualifiers.Background.BackgroundQualifier}
 */
class BaseCommonBackground extends BackgroundQualifier {
  protected _palette: string[];
  protected _constrast: boolean;

  constructor() {
    super();
    this._palette = [];
  }

  /**
   * @description Selects the strongest contrasting color to use for padding.
   * @return {this}
   */
  contrast(): this {
    this._constrast = true;
    return this;
  }

  /**
   * @description Defines the custom colors to use when resizing using content-aware padding.
   * @param {...string} colors One or more colors - Example: palette('green', 'red', blue')
   * @return {this}
   */
  palette(...colors: SystemColors[]): this {
    this._palette = colors.map((color) => {
      return prepareColor(color);
    });

    return this;
  }
}

export {BaseCommonBackground};
