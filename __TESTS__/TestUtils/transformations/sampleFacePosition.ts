import {Position} from "../../../src/MediaEditing/qualifiers/position";
import {Gravity} from "../../../src/MediaEditing/qualifiers/gravity";
import {FocusOn} from "../../../src/MediaEditing/qualifiers/focusOn";

/**
 * sample action used for testing
 */
function sampleFacePosition(): Position {
  return new Position().gravity(Gravity.focusOn(FocusOn.face()));
}

export {sampleFacePosition};
