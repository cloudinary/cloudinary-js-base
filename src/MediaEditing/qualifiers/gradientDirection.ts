import {GradientDirectionQualifierValue} from "./gradientDirection/GradientDirectionQualifierValue";

/**
 * @description Defines the direction for a background gradient fade effect.
 * @memberOf Qualifiers
 * @namespace GradientDirection
 */

/**
 * @summary qualifier
 * @description Blend the colors horizontally.
 * @memberOf Qualifiers.GradientDirection
 * @return {Qualifiers.GradientDirection.GradientDirectionQualifierValue}
 */
function horizontal(): GradientDirectionQualifierValue {
  return new GradientDirectionQualifierValue('horizontal');
}

/**
 * @summary qualifier
 * @description Blend the colors vertically.
 * @memberOf Qualifiers.GradientDirection
 * @return {Qualifiers.GradientDirection.GradientDirectionQualifierValue}
 */
function vertical(): GradientDirectionQualifierValue {
  return new GradientDirectionQualifierValue('vertical');
}

/**
 * @summary qualifier
 * @description Blend the colors diagonally from top-left to bottom-right.
 * @memberOf Qualifiers.GradientDirection
 * @return {Qualifiers.GradientDirection.GradientDirectionQualifierValue}
 */
function diagonalDesc(): GradientDirectionQualifierValue {
  return new GradientDirectionQualifierValue('diagonal_desc');
}

/**
 * @summary qualifier
 * @description Blend the colors diagonally from bottom-left to top-right.
 * @memberOf Qualifiers.GradientDirection
 * @return {Qualifiers.GradientDirection.GradientDirectionQualifierValue}
 */
function diagonalAsc(): GradientDirectionQualifierValue {
  return new GradientDirectionQualifierValue('diagonal_asc');
}



const GradientDirection = {
  horizontal,
  vertical,
  diagonalDesc,
  diagonalAsc
};


export {
  horizontal,
  vertical,
  diagonalDesc,
  diagonalAsc,
  GradientDirection
};
