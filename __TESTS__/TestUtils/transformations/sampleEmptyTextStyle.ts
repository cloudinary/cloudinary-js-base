import {TextStyle} from "../../../src/values/textStyle";

/**
 * Creates an empty TextStyle instance used for testing
 */
function sampleEmptyTextStyle(fontFamily = 'arial', fontSize = 50) {
  return new TextStyle(fontFamily, fontSize);
}


export {sampleEmptyTextStyle};