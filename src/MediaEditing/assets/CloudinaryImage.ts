import {ImageTransformation} from "../transformation/ImageTransformation";
import {CloudinaryTransformable} from "./CloudinaryTransformable";
import {LayerAction} from "../actions/layer/LayerAction";
import {ICloudConfig} from "../../Base";
import {IURLConfig} from "../../Base";


/**
 * @desc Cloudinary image asset, with image-related transformations
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryImage extends CloudinaryTransformable {
  constructor(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig) {
    /* istanbul ignore next */
    super(publicID, cloudConfig, urlConfig, new ImageTransformation());
  }
}


export {CloudinaryImage};
