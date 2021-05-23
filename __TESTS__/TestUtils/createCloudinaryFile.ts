import {ICloudConfig} from "../../src/Base";
import {IURLConfig} from "../../src/Base";
import {CloudinaryFile} from "../../src/MediaEditing";

/**
 *
 */
function createNewFile(publicID?: string, cloudConfig?: ICloudConfig, urlConfig?:IURLConfig): CloudinaryFile {
  const newCloudConfig = { cloudName: 'demo', ...cloudConfig};
  const newUrlConfig = { analytics: false, ...urlConfig};

  return new CloudinaryFile(publicID, newCloudConfig, newUrlConfig);
}

export {createNewFile};
