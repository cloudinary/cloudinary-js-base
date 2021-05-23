import {CloudinaryVideo} from "../../src/MediaEditing/assets/CloudinaryVideo";
import {ICloudConfig} from "../../src/Base";
import {IURLConfig} from "../../src/Base";

/**
 *
 */
function createNewVideo(publicID = 'sample', cloudConfig?: ICloudConfig, urlConfig?:IURLConfig): CloudinaryVideo {
  const newCloudConfig = { cloudName: 'demo', ...cloudConfig};
  const newUrlConfig = { analytics: false, ...urlConfig};

  return new CloudinaryVideo(publicID, newCloudConfig, newUrlConfig);
}

export {createNewVideo};
