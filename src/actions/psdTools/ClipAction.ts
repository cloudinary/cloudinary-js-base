import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import clipEvenOdd from "../../values/flag/clipEvenOdd";
import {clip} from "../../values/flag/clip";

/**
 * @description  Defines the clipping path to use when trimming pixels.
 * @augments Action
 */
class ClipAction extends Action {
  private path: string | number;
  private isEvenOdd = false;
  constructor(path: string|number) {
    super();
    this.path = path;
  }

  /**
   * @description Trims pixels according to a clipping path included in the original image using an evenodd clipping rule.
   */
  evenOdd(): this {
    this.isEvenOdd = true;
    return this;
  }

  protected prepareQualifiers(): this {
    let qualifierValue;
    if(typeof this.path === 'string') {
      qualifierValue = new QualifierValue(['name', this.path]).setDelimiter(':');
    } else {
      qualifierValue = new QualifierValue(this.path);
    }
    //handles flag
    if(this.isEvenOdd){
      this.addFlag(clipEvenOdd());
    }else {
      this.addFlag(clip());
    }

    this.addQualifier(new Qualifier('pg', qualifierValue));
    return this;
  }
}

export default ClipAction;
