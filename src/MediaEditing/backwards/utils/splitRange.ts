/**
 * Split a range into the start and end values
 * @param range
 */
import {OFFSET_ANY_PATTERN_RE} from "../consts";

export function splitRange(range: any) {
  switch (range && range.constructor) {
    case String:
      if (!OFFSET_ANY_PATTERN_RE.test(range)) {
        return range;
      }
      return range.split("..");
    case Array:
      return [[range], range[range.length - 1]];
    default:
      return [null, null];
  }
}
