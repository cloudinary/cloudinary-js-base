import {CloudinaryFile} from "../../../src/assets/CloudinaryFile";

describe('Tests for CloudinaryFile', () => {
  let cloudinaryFile: CloudinaryFile = null;
  beforeEach(() => {
    cloudinaryFile = new CloudinaryFile('sample', {cloudName:'demo'});
  });

  it('Instantiates a cloudinaryFile', () => {
    expect(cloudinaryFile).toBeDefined();
  });

  it('setPublicID should be chainable', () => {
    expect(cloudinaryFile.setPublicID('sample')).toBe(cloudinaryFile);
  });

  it('Sign should be chainable', () => {
    expect(cloudinaryFile.sign()).toBe(cloudinaryFile);
  });

  it('Can be turned to a URL', () => {
    expect(cloudinaryFile.toURL()).toBe('https://res.cloudinary.com/demo/image/upload/sample');
  });

  it('Can set private fields', () => {
    cloudinaryFile
      .setPublicID('sample')
      .setSuffix('foo')
      .setAssetType('video')
      .setStorageType('fetch')
      .setVersion('12345');

    expect(cloudinaryFile.toURL()).toContain('video/fetch/v12345/sample');
  });

  it('should use assetType from the asset', () => {
    cloudinaryFile.setAssetType('raw');

    expect(cloudinaryFile.toURL()).toBe('https://res.cloudinary.com/demo/raw/upload/sample');
  });
});

