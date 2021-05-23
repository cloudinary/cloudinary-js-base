import {v1NormalizeExpression} from "../utils/v1NormalizeExpression";

/**
 * Parse "if" parameter
 * Translates the condition if provided.
 * @private
 * @return {string} "if_" + ifValue
 */

export function process_if(ifValue: any) {
  return ifValue ? "if_" + v1NormalizeExpression(ifValue) : ifValue;
}
