/**
 * This file is for internal constants only.
 * It is not intended for public use and is not part of the public API
 */

/**
 * @private
 */
export const ALLOWED_URL_CONFIG = [
  'cname',
  'secureDistribution',
  'privateCdn',
  'signUrl',
  'longUrlSignature',
  'shorten',
  'useRootPath',
  'secure',
  'forceVersion',
  'analytics'
];

/**
 * @private
 */
export const ALLOWED_CLOUD_CONFIG = [
  'cloudName',
  'apiKey',
  'apiSecret',
  'authToken'
];

/**
 * @private
 */
export const INVALID_TYPE_MESSAGE = 'Invalid Type or key received';

export const CONDITIONAL_OPERATORS = {
  "=": "eq",
  "!=": "ne",
  "<": "lt",
  ">": "gt",
  "<=": "lte",
  ">=": "gte",
  "&&": "and",
  "||": "or",
  "*": "mul",
  "/": "div",
  "+": "add",
  "-": "sub",
  "^": "pow",
  "initial_width": "iw",
  "initial_height": "ih",
  "width": "w",
  "height": "h",
  "aspect_ratio": "ar",
  "initial_aspect_ratio": "iar",
  "trimmed_aspect_ratio": "tar",
  "current_page": "cp",
  "face_count": "fc",
  "page_count": "pc",
  "current_public_id": "cpi",
  "initial_density": "idn",
  "page_names": "pgnames"
};
