import {
  getUrlPrefix,
  getUrlVersion,
  handleAssetType,
  handleStorageType
} from "../internal/url/cloudinaryURL";
import {Transformation} from "../transformation/Transformation";
import {ICloudConfig} from "../../Base";
import {IURLConfig} from "../../Base";
import {IAuthTokenConfig} from "../../Base";
import {URLConfig} from "../../Base";
import {getSDKAnalyticsSignature} from "../sdkAnalytics/getSDKAnalyticsSignature";
import {ITrackedPropertiesThroughAnalytics} from "../sdkAnalytics/interfaces/ITrackedPropertiesThroughAnalytics";

/**
 * This const contains all the valid combination of asset/storage for URL shortening purposes
 * It's exported because it's used in a test, but it's not really shared enough to belong in a separate file
 */
export const SEO_TYPES: Record<string, string> = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};


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

  private version: number | string;
  private publicID: string;
  private extension: string;
  private signature: string;
  private suffix: string;
  private storageType: string; // type upload/private

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

  setSignature(signature: string): this {
    this.signature = signature;
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

  toURL(overwriteOptions: {trackedAnalytics?: Partial<ITrackedPropertiesThroughAnalytics>} = {}): string {
    return this.createCloudinaryURL(null, overwriteOptions.trackedAnalytics);
  }

  /**
   * @description Validate various options before attempting to create a URL
   * The function will throw in case a violation
   * @throws Validation errors
   */
  validateAssetForURLCreation(): void {
    if (typeof this.cloudName === 'undefined') {
      throw 'You must supply a cloudName in either toURL() or when initializing the asset';
    }

    const suffixContainsDot = this.suffix && this.suffix.indexOf('.') >= 0;
    const suffixContainsSlash = this.suffix && this.suffix.indexOf('/') >= 0;

    if (suffixContainsDot || suffixContainsSlash) {
      throw '`suffix`` should not include . or /';
    }
  }



  /**
   * @description return an SEO friendly name for a combination of asset/storage, some examples:
   * * image/upload -> images
   * * video/upload -> videos
   * If no match is found, return `{asset}/{storage}`
   */
  getResourceType(): string {
    const assetType = handleAssetType(this.assetType);
    const storageType = handleStorageType(this.storageType);

    const hasSuffix = !!this.suffix;
    const regularSEOType = `${assetType}/${storageType}`;
    const shortSEOType = SEO_TYPES[`${assetType}/${storageType}`];
    const useRootPath = this.urlConfig.useRootPath;
    const shorten = this.urlConfig.shorten;

    // Quick exit incase of useRootPath
    if (useRootPath) {
      if (regularSEOType === 'image/upload') {
        return ''; // For image/upload we're done, just return nothing
      } else {
        throw new Error(`useRootPath can only be used with assetType: 'image' and storageType: 'upload'. Provided: ${regularSEOType} instead`);
      }
    }

    if (shorten && regularSEOType === 'image/upload') {
      return 'iu';
    }


    if (hasSuffix) {
      if (shortSEOType) {
        return shortSEOType;
      } else {
        throw new Error(`URL Suffix only supported for ${Object.keys(SEO_TYPES).join(', ')}, Provided: ${regularSEOType} instead`);
      }
    }

    // If all else fails, return the regular image/upload combination (asset/storage)
    return regularSEOType;
  }


  getSignature() {
    if (this.signature) {
      return `s--${this.signature}--`;
    } else {
      return '';
    }
  }

  /**
   *
   * @description Creates a fully qualified CloudinaryURL
   * @return {string} CloudinaryURL
   * @throws Validation Errors
   */
  createCloudinaryURL(transformation?: Transformation | string, trackedAnalytics?: Partial<ITrackedPropertiesThroughAnalytics>): string {
    // In accordance with the existing implementation, if no publicID exists we should return nothing.
    if (!this.publicID) {
      return '';
    }

    // Throws if some options are mis-configured
    // See the function for more information on when it throws
    this.validateAssetForURLCreation();

    const prefix = getUrlPrefix(this.cloudName, this.urlConfig);
    const transformationString = transformation ? transformation.toString() : '';
    const version = getUrlVersion(this.publicID, this.version, this.urlConfig.forceVersion);

    const publicID = this.publicID
      // Serialize the publicID, but leave slashes alone.
      // we can't use serializeCloudinaryCharacters because that does both things (, and /)
      .replace(/,/g, '%2C');

    // Resource type is a mixture of assetType, storageType and various URL Configurations
    // Note how `suffix` changes both image/upload (resourceType) and also is appended at the end
    const url = [prefix, this.getResourceType(), this.getSignature(), transformationString, version, publicID, this.suffix]
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
        return `${safeURL}?_a=${getSDKAnalyticsSignature(trackedAnalytics)}`;
      } else {
        return safeURL;
      }
    }
  }
}

export {CloudinaryFile};
