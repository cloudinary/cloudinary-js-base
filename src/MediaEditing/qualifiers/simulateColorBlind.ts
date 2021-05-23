/**
 * @description Contains functions to select the type of color-blind condition to simulate.
 * <b>Learn more</b>: {@link https://cloudinary.com/blog/open_your_eyes_to_color_accessibility | Blog: Open your Eyes to Color Accessibility}
 * @memberOf Qualifiers
 * @namespace SimulateColorBlindValues
 * @see Visit {@link Actions.Effect|Effect} for an example
 */

/**
 * @summary qualifier
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function deuteranopia(): string {
  return 'deuteranopia';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function protanopia(): string {
  return 'protanopia';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function tritanopia(): string {
  return 'tritanopia';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function tritanomaly(): string {
  return 'tritanomaly';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function deuteranomaly(): string {
  return 'deuteranomaly';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function coneMonochromacy(): string {
  return 'cone_monochromacy';
}

/**
 * @summary qualifier
 * @memberOf Qualifiers.SimulateColorBlindValues
 * @return {string}
 */
function rodMonochromacy(): string {
  return 'rod_monochromacy';
}



const SimulateColorBlind = {
  coneMonochromacy,
  deuteranomaly,
  deuteranopia,
  protanopia,
  rodMonochromacy,
  tritanomaly,
  tritanopia
};

export {
  SimulateColorBlind,
  coneMonochromacy,
  deuteranomaly,
  deuteranopia,
  protanopia,
  rodMonochromacy,
  tritanomaly,
  tritanopia
};

