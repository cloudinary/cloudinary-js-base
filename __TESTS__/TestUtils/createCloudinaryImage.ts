import {CloudinaryImage} from "../../src/MediaEditing/assets/CloudinaryImage";
import {ICloudConfig} from "../../src/Base";
import {IURLConfig} from "../../src/Base";

/**
 *
 */
function createNewImage(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?:IURLConfig): CloudinaryImage {
  const newCloudConfig = { cloudName: 'demo', ...cloudConfig};
  const newUrlConfig = { analytics: false, ...urlConfig};

  return new CloudinaryImage(publicID, newCloudConfig, newUrlConfig);
}

export {createNewImage};
