import {Action} from "../../internal/Action";

/**
 * @memberOf Qualifiers.Region
 */
class NamedRegion extends Action {
  public regionType: 'faces' | 'ocr_text' | 'named';

  constructor(type: 'faces' | 'ocr_text' | 'named') {
    super();
    this.regionType = type;
  }
}


export {NamedRegion};
