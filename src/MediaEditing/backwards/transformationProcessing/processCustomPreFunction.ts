import {processCustomFunction} from "./processCustomFunction";

/**
 * Parse custom_pre_function options
 * @private
 * @param {object|*} customPreFunction a custom function object containing function_type and source values
 * @return {string|*} custom_pre_function transformation string
 */
export function processCustomPreFunction(customPreFunction: any) {
  const result = processCustomFunction(customPreFunction);
  return typeof result === 'string' ? `pre:${result}` : null;
}
