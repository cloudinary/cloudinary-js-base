import {VideoTransformation} from "../transformation/VideoTransformation";
import {CloudinaryTransformable} from "./CloudinaryTransformable";
import {Action} from "../internal/Action";
import {videoEditType} from "../actions/videoEdit";
import {createCloudinaryURL} from "../internal/url/cloudinaryURL";



/**
 * @desc Cloudinary image asset, with video-related transformations
 * @memberOf SDK
 */
class CloudinaryVideo extends CloudinaryTransformable {
  constructor(publicID?: string) {
    super(publicID, new VideoTransformation());
    this.setAssetType('video');
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

  toURL(): string {
    return createCloudinaryURL(this.config, Object.assign({
      assetType: 'video',
      storageType: 'upload'
    }, this.asset), this.transformation);
  }
}


export {CloudinaryVideo};
