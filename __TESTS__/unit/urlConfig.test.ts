import {ICloudinaryConfigurations} from "../../src/Base";
import {IURLConfig} from "../../src/Base";
import {CloudinaryImage} from "../../src/MediaEditing/assets/CloudinaryImage";
import {Resize} from "../../src/MediaEditing/actions/resize";
import {createNewImage} from "../TestUtils/createCloudinaryImage";
import {URLConfig} from "../../src/Base";


/**
 * @description Create CloudinaryURL based on a URL Configuration, and return the URL
 * @param urlConfig
 */
function createURLFromConfig(urlConfig: IURLConfig) {
  return new CloudinaryImage('sample', {
    cloudName: 'demo'
  }, urlConfig).toURL();
}


describe('It tests a combination of Cloudinary URL and Configuration', () => {
  it('Generates a URL', () => {
    const url = createNewImage('my_image')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/my_image');
  });

  it('Throw error when config is invalid', () => {
    expect(() => {
      new CloudinaryImage('my_image').toURL(); // missing cloudName should throw error
    }).toThrow();
  });

  it('Generates a URL with transforamtions', () => {
    const url = createNewImage()
      .resize(Resize.fill(100, 100))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/c_fill,h_100,w_100/sample');
  });

  it('Shows a use-case for global configuration', () => {
    //
    /**
     * We can implement this "wrapper", or instruct our customers how to implement it.
     */
    class MyGlobalCloudinary {
      public cloudinaryConfig: ICloudinaryConfigurations;

      // Constructor accepts a cloudinary configuration
      constructor(cloudinaryConfig: ICloudinaryConfigurations) {
        this.cloudinaryConfig = cloudinaryConfig;
      }

      // Utility function that returns a new instance with configuration set
      image(publicID: string) {
        return new CloudinaryImage(
          publicID,
          this.cloudinaryConfig.cloud,
          this.cloudinaryConfig.url
        );
      }
    }

    /**
     * Define the configuration and your "global" instance
     */
    const myInstance = new MyGlobalCloudinary({
      cloud: {
        cloudName: 'MY_CLOUD_NAME'
      },
      url: {
        analytics: false
      }
    });

    /**
     * Use the "global" instance
     */
    const img = myInstance.image('sample');
    img.resize(Resize.fill(100, 100));

    expect(img.toURL()).toBe('https://res.cloudinary.com/MY_CLOUD_NAME/image/upload/c_fill,h_100,w_100/sample');
  });


  it('Secure by default', () => {
    const url = createURLFromConfig({});
    expect(url).toContain('https://res.cloudinary.com/demo');
  });

  it('Supports secure:false', () => {
    const url = createURLFromConfig({
      secure: false
    });
    expect(url).toContain('http://res.cloudinary.com/demo');
  });

  it('Support cname with secure false', () => {
    const url = createURLFromConfig({
      cname: 'hello.com',
      secure: false
    });
    expect(url).toContain('http://hello.com/demo');
  });

  it('Support secureDistribution with secure true', () => {
    const url = createURLFromConfig({
      secureDistribution: 'foobar.com'
    });
    expect(url).toContain('https://foobar.com/demo');
  });

  it('Support private CDN with secure true', () => {
    const url = createURLFromConfig({
      privateCdn: true
    });
    expect(url).toContain(`https://demo-res.cloudinary.com/image/upload`);
  });

  it('Support secureDistribution with secure true', () => {
    const url = createURLFromConfig({
      secure: true,
      privateCdn: true,
      secureDistribution: "something.cloudfront.net"
    });
    expect(url).toContain('https://something.cloudfront.net/image/upload/');
  });

  it('Generates a URL with version in the public ID', () => {
    const img = createNewImage('v1234/foo/sample', {cloudName: 'demo'}, {forceVersion: true});

    expect(img.toURL()).toContain('https://res.cloudinary.com/demo/image/upload/v1234/foo/sample');
  });

  it('Generates a URL with V1', () => {
    const img = createNewImage('foo/sample', {cloudName: 'demo'}, {forceVersion: true});

    expect(img.toURL()).toContain('https://res.cloudinary.com/demo/image/upload/v1/foo/sample');
  });

  it('Generates a URL without V1', () => {
    const img = createNewImage('foo/sample', {cloudName: 'demo'}, {forceVersion: false});

    expect(img.toURL()).toContain('https://res.cloudinary.com/demo/image/upload/foo/sample');
  });

  it('Sets attributes using setters', () => {
    const conf = new URLConfig({});

    conf
      .setCname('foo')
      .setForceVersion(true)
      .setLongUrlSignature(true)
      .setPrivateCdn(true)
      .setSecure(true)
      .setShorten(true)
      .setSignUrl(true)
      .setUseRootPath(true);

    expect(conf.cname).toBe('foo');
    expect(conf.forceVersion).toBe(true);
    expect(conf.longUrlSignature).toBe(true);
    expect(conf.privateCdn).toBe(true);
    expect(conf.secure).toBe(true);
    expect(conf.shorten).toBe(true);
    expect(conf.signUrl).toBe(true);
    expect(conf.useRootPath).toBe(true);
  });
});
