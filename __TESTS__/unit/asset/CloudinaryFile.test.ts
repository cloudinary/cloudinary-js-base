import {CloudinaryFile} from "../../../src/MediaEditing/assets/CloudinaryFile";

describe('Tests for CloudinaryFile', () => {
  let cloudinaryFile: CloudinaryFile = null;
  beforeEach(() => {
    cloudinaryFile = new CloudinaryFile('sample', {cloudName:'demo'}, {analytics:false});
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
      .setAssetType('image')
      .setStorageType('private')
      .setVersion('12345');

    expect(cloudinaryFile.toURL()).toContain('private_images/v12345/sample/foo');
  });

  it('should use assetType from the asset', () => {
    cloudinaryFile.setAssetType('raw');

    expect(cloudinaryFile.toURL()).toBe('https://res.cloudinary.com/demo/raw/upload/sample');
  });
});

