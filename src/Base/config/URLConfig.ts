import {IURLConfig} from "./interfaces/Config/IURLConfig";
import {Config} from "./BaseConfig";
import {ICloudConfig} from "./interfaces/Config/ICloudConfig";
import {ALLOWED_URL_CONFIG} from "../ConfigConstants";

class URLConfig extends Config implements IURLConfig {
  cname?: string; // User subdomain (example.cloudinary.com)
  secureDistribution?: string;
  privateCdn?: boolean;
  signUrl?: boolean;
  longUrlSignature?: boolean;
  shorten?: boolean;
  useRootPath?: boolean;
  secure?: boolean;
  forceVersion?: boolean;

  /**
   * @param {IURLConfig} userURLConfig
   */
  constructor(userURLConfig: IURLConfig | any) {
    super();
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    Object.assign(this, {
      secure: true
    }, urlConfig);
  }

  extend(userURLConfig: ICloudConfig | any): URLConfig {
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    return new URLConfig(Object.assign({}, this, urlConfig));
  }

  /**
   * @param {string} value Sets the cname
   */
  setCname(value: string): this {
    this.cname = value;
    return this;
  }

  /**
   * @param {string} value Sets the secureDistribution
   */
  setSecureDistribution(value: string): this {
    this.secureDistribution = value;
    return this;
  }

  /**
   * @param {boolean} value Sets whether to use a private CDN (Removes cloudName from URL)
   */
  setPrivateCdn(value: boolean): this {
    this.privateCdn = value;
    return this;
  }

  /**
   * @param value Sets whether or not to sign the URL
   */
  setSignUrl(value: boolean): this {
    this.signUrl = value;
    return this;
  }

  /**
   * @param value Sets whether or not to use a long signature
   */
  setLongUrlSignature(value: boolean): this {
    this.longUrlSignature = value;
    return this;
  }

  /**
   * @param value Sets whether or not to shorten the URL
   */
  setShorten(value: boolean): this {
    this.shorten = value;
    return this;
  }

  /**
   * @param value Sets whether or not to use a root path
   */
  setUseRootPath(value: boolean): this {
    this.useRootPath = value;
    return this;
  }

  /**
   * @param value Sets whether or not to deliver the asset through https
   */
  setSecure(value: boolean): this {
    this.secure = value;
    return this;
  }

  /**
   * @param value Sets whether to force a version in the URL
   */
  setForceVersion(value: boolean): this {
    this.forceVersion = value;
    return this;
  }
}


export {URLConfig};
