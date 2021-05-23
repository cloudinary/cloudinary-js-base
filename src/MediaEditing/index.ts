import {Actions} from './actions';
import {Qualifiers} from "./qualifiers";
import {Transformation} from "./transformation/Transformation";
import {ImageTransformation} from "./transformation/ImageTransformation";
import {VideoTransformation} from "./transformation/VideoTransformation";
import {CloudinaryImage} from "./assets/CloudinaryImage";
import {CloudinaryVideo} from "./assets/CloudinaryVideo";
import {CloudinaryFile} from "./assets/CloudinaryFile";
import {Cloudinary} from "./instance/Cloudinary";
import {createCloudinaryV1URL} from "./backwards/createCloudinaryURL";

/**
 * @namespace SDK
 */
const CloudinaryBaseSDK = {
  Transformation,
  ImageTransformation,
  VideoTransformation,
  Actions,
  Qualifiers,
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
  CloudinaryFile,
  createCloudinaryV1URL
};

export {
  Transformation,
  ImageTransformation,
  VideoTransformation,
  Actions,
  Qualifiers,
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
  CloudinaryFile,
  createCloudinaryV1URL,
  CloudinaryBaseSDK,
  CloudinaryBaseSDK as default
};
