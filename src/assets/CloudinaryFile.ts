import {
  getUrlPrefix,
  getUrlVersion,
  handleAssetType,
  handleStorageType
} from "../internal/url/cloudinaryURL";
import {Transformation} from "../transformation/Transformation";
import ICloudConfig from "../config/interfaces/Config/ICloudConfig";
import IURLConfig from "../config/interfaces/Config/IURLConfig";
import IAuthTokenConfig from "../config/interfaces/Config/IAuthTokenConfig";
import URLConfig from "../config/URLConfig";
import {getSDKAnalyticsSignature} from "../sdkAnalytics/getSDKAnalyticsSignature";
import {ITrackedPropertiesThroughAnalytics} from "../sdkAnalytics/interfaces/ITrackedPropertiesThroughAnalytics";

/**
 * @desc Cloudinary file without a transformation
 * @summary SDK
 * @memberOf SDK
 */
class CloudinaryFile {
  protected assetType: string; // resourceType image/video, determined by the asset type
  protected cloudName: string; // populated from the cloud config
  protected apiKey: string; // populated from  the cloud config
  protected apiSecret: string; // populated from the cloud config
  protected authToken: IAuthTokenConfig; // populated from the cloud config
  protected urlConfig: IURLConfig;

  public version: number | string;
  public publicID: string;
  public extension: string;
  public suffix: string;
  public storageType: string; // type upload/private

  constructor(publicID: string, cloudConfig: ICloudConfig = {}, urlConfig?: IURLConfig) {
    this.setPublicID(publicID);
    this.cloudName = cloudConfig.cloudName;
    this.apiKey = cloudConfig.apiKey;
    this.apiSecret = cloudConfig.apiSecret;
    this.authToken = cloudConfig.authToken;
    this.urlConfig = new URLConfig(urlConfig);
  }

  setPublicID(publicID: string): this {
    // PublicID must be a string!
    this.publicID = publicID ? publicID.toString() : '';
    return this;
  }

  setStorageType(newType: string): this {
    this.storageType = newType;
    return this;
  }

  setSuffix(newSuffix: string): this {
    this.suffix = newSuffix;
    return this;
  }

  setVersion(newVersion: number | string): this {
    if (newVersion) {
      this.version = newVersion;
    }
    return this;
  }

  setAssetType(newType: string): this {
    if (newType) {
      this.assetType = newType;
    }
    return this;
  }

  sign(): this {
    return this;
  }

  toURL(trackedAnalytics?: ITrackedPropertiesThroughAnalytics): string {
    return this.createCloudinaryURL(null, trackedAnalytics);
  }


  /**
   *
   * @description Creates a fully qualified CloudinaryURL
   * @return {string} CloudinaryURL
   */
  createCloudinaryURL(transformation?: Transformation | string, trackedAnalytics?: Partial<ITrackedPropertiesThroughAnalytics>): string {
    if (typeof this.cloudName === 'undefined') {
      throw 'You must supply a cloudName in either toURL() or when initializing the asset';
    }
    const prefix = getUrlPrefix(this.cloudName, this.urlConfig);
    const assetType = handleAssetType(this.assetType);
    const storageType = handleStorageType(this.storageType);

    const transformationString = transformation ? transformation.toString() : '';

    const version = getUrlVersion(this.publicID, this.version, this.urlConfig.forceVersion);

    const publicID = this.publicID
      // Serialize the publicID, but leave slashes alone.
      // we can't use serializeCloudinaryCharacters because that does both things (, and /)
      .replace(/,/g, '%2C');

    const url = [prefix, assetType, storageType, transformationString, version, publicID]
      .filter((a) => a)
      .join('/');

    if (typeof transformation === 'string') {
      return url;
    } else {
      const safeURL = encodeURI(url)
        .replace(/\?/g, '%3F')
        .replace(/=/g, '%3D');

      // True by default, has to be explicitly set to false to overwrite
      if (this.urlConfig.analytics !== false) {
        return `${safeURL}?${getSDKAnalyticsSignature(trackedAnalytics)}`;
      } else {
        return safeURL;
      }
    }
  }
}

export {CloudinaryFile};
