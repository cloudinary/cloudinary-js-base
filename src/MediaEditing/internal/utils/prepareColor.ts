import {SystemColors} from "../../qualifiers/color";


/**
 * Returns RGB or Color
 * @private
 * @param color
 */
export function prepareColor(color: SystemColors): SystemColors {
  if (color) {
    return color.match(/^#/) ? `rgb:${color.substr(1)}` : color;
  } else {
    return color;
  }
}
