/**
 * Adds another video, text or image as an underlay over the container video.
 * @memberOf Actions
 * @namespace Layers
 */


import Action from "../Action";
import Source, {ImageSource, TextSource, VideoSource} from "../../params/sources/Sources";
import {Position} from "../../params/position/Position";
import Param from "../../parameters/Param";
import {BlendMode} from "../../params/blendMode/BlendMode";
import {VideoRange} from "../../params/video/VideoRange";
import {ISource} from "../../params/sources/ISource";
import {Flag} from "../../params/flag/Flag";


class Layer extends Action{
  source: ISource;
  position:Position;
  blendMode: BlendMode;
  timeLinePosition: VideoRange;
  modifications: Action; // Appends modifications to the layer, such as e_style_transfer
  layerType: string;
  constructor(transformable: ISource, position:Position, blendMode: BlendMode|null=null, timeLinePosition: VideoRange|null=null) {
    super();
    this.source = transformable;
    this.position = position;
    this.blendMode = blendMode;
    this.timeLinePosition = timeLinePosition;
    this.modifications = new Action();
  }

  /**
   * Sets the layerType with u | l depending if underlay or overlay
   * @param type
   */
  setLayerType(type: 'u' | 'l'): this {
    this.layerType = type;
    return this;
  }

  /**
   * Layers are built using three bits -> /Open/Transform/Close
   * The opening of a layer
   */
  openLayer(): string {
    return `${this.layerType}_${this.source.getSource()}`;
  }

  /**
   * Layers are built using three bits -> /Open/Transform/Close
   * Transformations conducted on the image in the layer
   */
  layerTransformation():string {
    return this.source.getTransformationString();
  }

  /**
   * Layers are built using three bits -> /Open/Transform/Close
   * Closing of the layer, includes Position as well
   */
  closeLayer():Action {
    const bit = new Action().addFlag(new Flag('layer_apply'));

    this.position?.params.forEach((param) => {
      bit.addParam(param);
    });

    this.blendMode?.params.forEach((param) => {
      bit.addParam(param);
    });

    this.timeLinePosition?.params.forEach((param) => {
      bit.addParam(param);
    });

    if (this.timeLinePosition) {
      // TODO: This is just for testing. remove this after implementing VideoRange
      bit.addParam(new Param("so", 7));
    }

    this.modifications?.params.forEach((param) => {
      bit.addParam(param);
    });

    return bit;
  }

  toString():string{
    // Since layerTransformation can be empty, we filter out empty strings.
    return [this.openLayer(), this.layerTransformation(), this.closeLayer()].filter((a) => a).join('/');
  }
}


/**
 * @param imageSource
 * @param position
 * @param blendMode
 * @memberOf Actions.Layers
 * @return {Layer}
 */
function imageLayer(imageSource: ImageSource, position?:Position, blendMode?:BlendMode): Layer {
  return new Layer(imageSource, position, blendMode);
}

/**
 * @param textSource
 * @param position
 * @param blendMode
 * @memberOf Actions.Layers
 * @return {Layer}
 */
function textLayer(textSource: TextSource, position?:Position, blendMode?:BlendMode): Layer {
  return new Layer(textSource, position, blendMode);
}

/**
 * @param videoSource
 * @param position
 * @param timeLinePosition
 * @memberOf Actions.Layers
 * @return {Layer}
 */
function videoLayer(videoSource: VideoSource, position?:Position, timeLinePosition?:VideoRange): Layer {
  return new Layer(videoSource, position, null, timeLinePosition);
}

export {imageLayer, textLayer, videoLayer, Source, Layer};
export default {imageLayer, textLayer, videoLayer, Source, Layer};
