import {v1NormalizeExpression} from "../utils/v1NormalizeExpression";


/**
 * Parse radius options
 * @private
 * @param {Array<string|number>|string|number} _radius The radius to parse
 * @return {string} radius transformation string
 */
export function processRadius(_radius: any) {
  let radius = _radius;

  if (!radius) {
    return radius;
  }

  if (!Array.isArray(radius)) {
    radius = [radius];
  }


  if (radius.length === 0 || radius.length > 4) {
    throw new Error("Radius array should contain between 1 and 4 values");
  }
  if (radius.findIndex((x: any) => x === null) >= 0) {
    throw new Error("Corner: Cannot be null");
  }
  return radius.map(v1NormalizeExpression).join(':');
}
