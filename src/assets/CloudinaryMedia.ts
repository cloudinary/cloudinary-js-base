import {CloudinaryTransformable} from "./CloudinaryTransformable";
import {Action} from "../internal/Action";
import {videoEditType} from "../actions/videoEdit";
import {LayerAction} from "../actions/layer/LayerAction";
import {Transformation} from "../transformation/Transformation";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig";
import IURLConfig from "../config/interfaces/Config/IURLConfig";


/**
 * @desc Cloudinary media asset, with all possible transformations
 * @memberOf SDK
 */
class CloudinaryMedia extends CloudinaryTransformable {
  constructor(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig) {
    super(publicID, cloudConfig, urlConfig, new Transformation());
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.Transcode} action
   * @return {this}
   */
  transcode(action: Action): this {
    this.transformation.transcode(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @param {Actions.VideoEdit} action
   * @return {this}
   */
  videoEdit(action: videoEditType): this {
    this.transformation.videoEdit(action);
    return this;
  }

  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contains in this.transformation
   * @return {this}
   */
  underlay(underlayAction: LayerAction): this {
    this.transformation.underlay(underlayAction);
    return this;
  }

  toURL(): string {
    return this.createCloudinaryURL(this.transformation);
  }
}


export {CloudinaryMedia};