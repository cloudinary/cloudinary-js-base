import CloudinaryConfig from "../../../src/sdk/config/CloudinaryConfig";
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import Cloudinary from "../../../src/instance/Cloudinary";
import {fill} from "../../../src/actions/resize";

describe('Tests for Cloudinary instance', () => {
  it ('Creates an instance with its own global config', () => {
    const cloudinary = new Cloudinary(new CloudinaryConfig({
      cloud: {
        cloudName:'demoInInstance'
      }
    }));
    cloudinary.useImage(CloudinaryImage);
    const tImage = cloudinary.image('sample');

    tImage.resize(fill(10, 10));

    expect(tImage.toURL()).toBe('https://res.cloudinary.com/demoInInstance/image/upload/c_fill,h_10,w_10/sample');
  });


  it ('Can pass config in runtime instead of in creation', () => {
    const cloudinary = new Cloudinary();

    cloudinary.setConfig(new CloudinaryConfig({
      cloud: {
        cloudName:'demoInInstance'
      }
    }));

    cloudinary.useImage(CloudinaryImage);
    const tImage = cloudinary.image('sample');

    tImage.resize(fill(10, 10));

    expect(tImage.toURL()).toBe('https://res.cloudinary.com/demoInInstance/image/upload/c_fill,h_10,w_10/sample');
  });

  it ('throw error when useImage() is not called', () => {
    expect(()=> {
      const cloudinary = new Cloudinary(new CloudinaryConfig({
        cloud: {
          cloudName:'demoInInstance'
        }
      }));
      const tImage = cloudinary.image('sample');

      tImage.resize(fill(10, 10));
    }).toThrow();
  });
});
