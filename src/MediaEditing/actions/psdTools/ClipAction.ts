import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {clip, clipEvenOdd} from "../../qualifiers/flag";

/**
 * @description  Defines the clipping path to use when trimming pixels.
 * @extends SDK.Action
 * @memberOf Actions.PSDTools
 * @see Visit {@link Actions.PSDTools| PSDTools} for an example
 */
class ClipAction extends Action {
  private path: string | number;
  private isEvenOdd = false;
  constructor() {
    super();

  }

  /**
   * @description The name of the path to clip by
   * @param {string} path
   * @return {this}
   */
  byName(path: string): this {
    this.path = path;
    return this;
  }

  /**
   * @description The index of the path to clip by
   * @param {number} path
   * @return {this}
   */
  byIndex(path: number): this {
    this.path = path;
    return this;
  }

  /**
   * @description Trims pixels according to a clipping path included in the original image using an evenodd clipping rule.
   * @return {this}
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

export {ClipAction};
