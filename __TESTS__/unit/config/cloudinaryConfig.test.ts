import {CloudinaryConfig} from "../../../src/Base";
import {URLConfig} from "../../../src/Base";
import {CloudConfig} from "../../../src/Base/config/CloudConfig";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {createNewFile} from "../../TestUtils/createCloudinaryFile";

describe('Tests for CloudinaryConfiguration', () => {
  it('Creates a CloudinaryConfig with defaults', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName:'foo'
      }
    });

    expect(conf.cloud).toEqual({
      cloudName:'foo'
    });
    expect(conf.url).toEqual({
      secure:true
    });
  });

  it('Will populate cloud configuration', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'cloud_name',
        apiKey: 'api_key',
        apiSecret: 'api_secret'
      }
    });

    expect(conf.cloud.cloudName).toBe('cloud_name');
    expect(conf.cloud.apiKey).toBe('api_key');
    expect(conf.cloud.apiSecret).toBe('api_secret');
  });

  it('Will populate URL configuration', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'foo'
      },
      url: {
        forceVersion: true,
        shorten: true,
        signUrl: true,
        longUrlSignature: true,
        useRootPath: true,
        cname: 'cname',
        privateCdn: true,
        secure: true,
        secureDistribution: ''
      }
    });

    expect(conf.url.forceVersion).toBe(true);
    expect(conf.url.shorten).toBe(true);
    expect(conf.url.signUrl).toBe(true);
    expect(conf.url.longUrlSignature).toBe(true);
    expect(conf.url.useRootPath).toBe(true);
    expect(conf.url.cname).toBe('cname');
    expect(conf.url.privateCdn).toBe(true);
    expect(conf.url.secure).toBe(true);
    expect(conf.url.secureDistribution).toBe('');

  });

  it('Will log errors when invalid properties are passed as configuration', () => {
    const error = console.warn;
    // mute the errors for the test
    console.warn = () => {};
    const mockedFunction = jest.spyOn(console, 'warn');

    const config = {
      cloud:{
        'fakeKey': true,
        cloudName:'foo'
      },
      url: {
        'fakeKey': true,
        secure: true
      }
    };

    new CloudinaryConfig(config);

    // ensure expected result
    expect(mockedFunction).toHaveBeenCalledTimes(2);

    // Restore the globals
    mockedFunction.mockRestore();
    console.warn = error;
  });

  it('Will log errors when called directly with invalid types', () => {
    const error = console.warn;
    // mute the errors for the test
    console.warn = () => {};
    const mockedFunction = jest.spyOn(console, 'warn');


    // Configs expect objects as input, but we allow invalid types without throwing
    expect(() => {
      new CloudConfig('foo' as any);
    }).toThrow();

    expect(() => {
      new CloudConfig([] as any);
    }).toThrow();

    expect(new URLConfig([])).toEqual({
      secure:true
    });

    // Expect no warnings at all
    expect(mockedFunction).toHaveBeenCalledTimes(0);

    // Restore the globals
    mockedFunction.mockRestore();
    console.warn = error;
  });

  it('Can extend the configuration', () => {
    const conf = new CloudinaryConfig({
      cloud:{
        cloudName:'foo',
        apiSecret: 'abc'
      }
    });

    expect(conf.cloud.apiSecret).toBe('abc');

    const newConf = conf.extend({
      cloud: {
        apiKey: 'xyz',
        cloudName:'foo'
      }
    });

    expect(newConf.cloud.apiKey).toBe('xyz');
  });

  it('Should set secure to true by default', () => {
    const url = createNewImage('sample')
      .toURL();

    expect(url).toContain('https://');
  });

  it('Should allow setting secure attribute', () => {
    const url = createNewImage('sample', {}, { secure: false})
      .toURL();

    expect(url).toContain('http://');
  });

  it('should allow overriding cloudName in config', () => {
    const conf = new CloudinaryConfig({
      cloud: {
        cloudName: 'foo'
      }
    });

    conf.cloud.cloudName = 'demo';

    expect(conf.cloud).toEqual({
      cloudName: 'demo'
    });
  });

  it('should put format after url_suffix', () => {
    const img = createNewImage('sample', {
      cloudName: 'demo'
    }).setSuffix('SOME_SUFFIX');

    expect(img.toURL()).toBe("https://res.cloudinary.com/demo/images/sample/SOME_SUFFIX");
  });

  it('should support url_suffix for raw uploads', () => {
    const file = createNewFile('sample', {
      cloudName: 'demo'
    }).setSuffix('SOME_SUFFIX');

    expect(file.toURL()).toBe("https://res.cloudinary.com/demo/images/sample/SOME_SUFFIX");
  });

  it('should support url_suffix for private uploads', () => {
    const img = createNewImage('sample');
    img.setStorageType('private');
    img.setSuffix('SOME_SUFFIX');

    expect(img.toURL()).toBe("https://res.cloudinary.com/demo/private_images/sample/SOME_SUFFIX");
  });

  it('should support useRootPath with privateCdn', () => {
    const img = createNewImage('sample', {}, {
      useRootPath: true,
      privateCdn: true
    });

    expect(img.toURL()).toBe("https://demo-res.cloudinary.com/sample");
  });

  it('should support `useRootPath` together with `suffix` for `privateCdn`', () => {
    const img = createNewImage('sample', {}, {
      useRootPath: true,
      privateCdn: true
    }).setSuffix('SOME_SUFFIX');

    expect(img.toURL()).toBe("https://demo-res.cloudinary.com/sample/SOME_SUFFIX");
  });

  it('should disallow useRootPath if not image/upload', () => {
    expect(() => {
      const img = createNewImage('sample', {}, {
        useRootPath: true,
        privateCdn: true
      }).setStorageType('private');
      img.toURL();
    }).toThrow();

    expect(() => {
      const img = createNewImage('sample', {}, {
        useRootPath: true,
        privateCdn: true
      }).setAssetType('raw');
      img.toURL();
    }).toThrow();
  });
});
