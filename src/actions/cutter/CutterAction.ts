import Action from "../Action";
import ImageSource from "../../params/sources/ImageSource";
import {Layer, imageLayer} from "../layers/Layers";
import {Flag} from "../../params/flag/Flag";

class CutterAction extends Action {
  private layer: Layer;
  constructor(source: ImageSource) {
    super();
    this.layer = imageLayer(source).setLayerType('l');
    // `modifications` is the action used as the last component of a layer
    // we can leverage that to add more things to it
    this.layer.modifications.addFlag(new Flag('cutter'));
  }

  toString(): string {
    return this.layer.toString();
  }
}


export default CutterAction;