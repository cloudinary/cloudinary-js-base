import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {StringNumberOrExpression} from "../../simpleTypes";
import {toFloatAsString} from "../../internal/utils/toFloatAsString";

/**
 * @description Defines a video range using startOffset, endOffset, duration.
 * @namespace TimelinePosition
 * @memberOf Qualifiers
 */


/**
 * TimelinePosition
 * @memberOf Qualifiers.TimelinePosition
 */
class TimelinePosition extends Action {
  constructor() {
    super();
  }

  /**
   * @param {string | number} startOffset
   */
  startOffset(startOffset: StringNumberOrExpression): this {
    let value = startOffset;

    // Force to always use floats
    if (typeof startOffset === 'number') {
      value = toFloatAsString(startOffset);
    }

    this.addQualifier(new Qualifier('so', value));
    return this;
  }

  /**
   * @param {string | number} endOffset
   */
  endOffset(endOffset: StringNumberOrExpression): this {
    this.addQualifier(new Qualifier('eo', endOffset));
    return this;
  }

  /**
   * @param {string | number} duration
   */
  duration(duration: StringNumberOrExpression): this {
    this.addQualifier(new Qualifier('du', duration));
    return this;
  }
}

export {
  TimelinePosition
};
