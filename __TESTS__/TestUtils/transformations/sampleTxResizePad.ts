import {pad} from "../../../src/MediaEditing/actions/resize";
import {Transformation} from "../../../src/MediaEditing/transformation/Transformation";

/**
 * sample action used for testing
 */
function sampleTxResizePad(): Transformation {
  return new Transformation().resize(pad().width(100));
}

export {sampleTxResizePad};
