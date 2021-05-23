import {CloudConfig} from "./CloudConfig";
import {URLConfig} from "./URLConfig";
import {ICloudinaryConfigurations} from "./interfaces/Config/ICloudinaryConfigurations";
import {ICloudConfig} from "./interfaces/Config/ICloudConfig";
import {IURLConfig} from "./interfaces/Config/IURLConfig";
import {IApiConfig} from "./interfaces/Config/IApiConfig";
import {ITagConfig} from "./interfaces/Config/ITagConfig";

class CloudinaryConfig {
  public cloud: CloudConfig;
  public url: URLConfig;

  constructor(configurations: ICloudinaryConfigurations = {}) {
    this.cloud = new CloudConfig(configurations.cloud);
    this.url = new URLConfig(configurations.url || {});
  }

  /**
   * @description Setter for the cloudConfig
   * @param {ICloudConfig} cld
   */
  setCloudConfig(cld: ICloudConfig): this {
    this.cloud = new CloudConfig(cld);
    return this;
  }

  /**
   * @description Setter for the urlConfig
   * @param {IURLConfig} url
   */
  setURLConfig(url: IURLConfig): this {
    this.url = new URLConfig(url);
    return this;
  }

  setAPIConfig(apiConfig: IApiConfig): this {
    // placeholder
    return this;
  }

  setTagConfig(tag: ITagConfig): this {
    // placeholder
    return this;
  }

  extend(configurations: ICloudinaryConfigurations): CloudinaryConfig {
    this.cloud = this.cloud.extend(configurations.cloud || {});
    this.url = this.url.extend(configurations.url || {});

    return this;
  }
}


export {CloudinaryConfig};
