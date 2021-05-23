import {ICloudConfig} from "../../../../src/Base";
import {IURLConfig} from "../../../../src/Base";
import {CloudinaryImage} from "../../../../src/MediaEditing";
import {createNewImage} from "../../../TestUtils/createCloudinaryImage";

/**
 * Create a new CloudinaryImage with analytics turned on by default
 */
export function createNewImageWithAnalytics(publicID: string, cloudConfig?: ICloudConfig, urlConfig?: IURLConfig): CloudinaryImage {
  return createNewImage(publicID, {cloudName: 'demo'}, {analytics: true, ...urlConfig});
}
