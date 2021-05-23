/**
 * @description Contains functions to select the type of improvement to perform when using Adjust.improve().
 * @namespace Outline
 * @memberOf Qualifiers
 * @see Visit {@link Actions.Effect|Effect Action} for an example
 */

/**
 * @summary qualifier
 * @memberOf Qualifiers.Outline
 */
function fill(): string {
  return 'fill';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.Outline
 */
function inner(): string {
  return 'inner';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.Outline
 */
function innerFill(): string {
  return 'inner_fill';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.Outline
 */
function outer(): string {
  return 'outer';
}

const OutlineMode = {
  outer,
  inner,
  innerFill,
  fill
};

export {
  OutlineMode,
  outer,
  inner,
  innerFill,
  fill
};
