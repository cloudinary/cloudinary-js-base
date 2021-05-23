import {createNewImage} from "../../TestUtils/createCloudinaryImage";
import {CloudinaryImage} from "../../../src/MediaEditing";
import {Resize} from "../../../src/MediaEditing/actions/resize";
import {Rotate} from "../../../src/MediaEditing/actions/rotate";
import {SEO_TYPES} from "../../../src/MediaEditing/assets/CloudinaryFile";


describe('Tests for URL configuration', () => {
  it('should allow to shorted image/upload urls', () => {
    const url = createNewImage('sample', {}, {
      shorten:true
    }).toURL();

    expect(url).toEqual('https://res.cloudinary.com/demo/iu/sample');
  });

  it('should support `suffix` with `sharedDistribution', () => {
    const image = createNewImage('sample').setSuffix('hello');

    expect(image.toURL()).toEqual('https://res.cloudinary.com/demo/images/sample/hello');

    image.rotate(Rotate.byAngle(0));
    expect(image.toURL()).toEqual('https://res.cloudinary.com/demo/images/a_0/sample/hello');
  });

  it('should support `suffix` with `privateCdn`', () => {
    const image = createNewImage('sample', {}, {privateCdn: true})
      .setSuffix('hello');

    expect(image.toURL()).toEqual('https://demo-res.cloudinary.com/images/sample/hello');

    image.rotate(Rotate.byAngle(0));
    expect(image.toURL()).toEqual('https://demo-res.cloudinary.com/images/a_0/sample/hello');
  });

  it('should only allow `suffix` with a predfined list of storageType/assetType', () => {
    const image = createNewImage('test')
      .setSuffix('abc');

    // Suffix only works with predefined SEO_TYPES
    Object.keys(SEO_TYPES).forEach((resourceType) => {
      const [assetType, storageType] = resourceType.split('/');
      image.setStorageType(assetType)
        .setStorageType(storageType);

      expect(image.toURL.bind(image)).not.toThrow();
    });

    // Any other storage type should throw
    image.setStorageType('fff');
    expect(image.toURL.bind(image)).toThrow();
  });

  it('should disallow url_suffix with / or .', () => {
    const image = createNewImage('test');

    image.setSuffix('hello/world');
    expect(image.toURL.bind(image)).toThrow();

    image.setSuffix('hello.world');
    expect(image.toURL.bind(image)).toThrow();
  });

  it('should support `useRootPath` with `privateCdn`', () => {
    const image = createNewImage('test', {}, {
      privateCdn: true,
      useRootPath: true
    });

    expect(image.toURL()).toEqual('https://demo-res.cloudinary.com/test');

    image.rotate(Rotate.byAngle(0));
    expect(image.toURL()).toEqual('https://demo-res.cloudinary.com/a_0/test');
  });

  it('should accept public_id with special characters', () => {
    const image = createNewImage('public%id');
    expect(image.toURL()).toEqual('https://res.cloudinary.com/demo/image/upload/public%25id');
  });

  it('should not fail on falsy public_id', () => {
    const url = createNewImage(null)
      .toURL();
    expect(url).toEqual('');
  });

  it('Should support an external signature', () => {
    const image = createNewImage('sample');
    const signature = "some-signature";

    image.setSignature(signature);
    //image.signature(signature)
    image.resize(Resize.crop().width(100));
    const url = image.toURL();

    expect(url).toEqual(`https://res.cloudinary.com/demo/image/upload/s--${signature}--/c_crop,w_100/sample`);
  });
});
