import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {TransformableImage} from "../../../src";
import {Overlay} from "../../../src/actions/Actions";
import {image, text} from "../../../src/values/sources/Sources";


const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});


describe('Tests for Encoding the URL', () => {
  it ('Should serialize, but not encode, when calling toString', () => {
    const str = new TransformableImage()
      .overlay(Overlay.imageLayer(text('he llo')))
      .toString();
    expect(str).toBe('l_text:he llo/fl_layer_apply');
  });

  it ('Should encode cloudinary characters (",") in a publicID', () => {
    const url = new TransformableImage('sam,ple')
      .setConfig(CONFIG_INSTANCE)
      .toURL();
    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/sam%252Cple');
  });

  it ('Does not mutate valid / in publicID', () => {
    const url = new TransformableImage('folder/name')
      .setConfig(CONFIG_INSTANCE)
      .toURL();
    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/v1/folder/name');
  });

  it ('Should encode regular text in a textLayer', () => {
    const url = new TransformableImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .overlay(Overlay.imageLayer(text('he llo').fontFamily('arial').fontSize(50)))
      .toURL();

    expect(url)
      // Space encoded correctly to %20
      .toBe('https://res.cloudinary.com/demo/image/upload/l_text:arial_50:he%20llo/fl_layer_apply/sample');
  });

  it ('Should encode font name in textOverlay', () => {
    const tx = new TransformableImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .overlay(Overlay.imageLayer(text('he llo').fontFamily('roboto condensed').fontSize(50)));

    expect(tx.toString())
      // Correctly serialize the cloudinary control characters
      .toBe('l_text:roboto condensed_50:he llo/fl_layer_apply');

    expect(tx.toURL())
      // Space encoded correctly to %20
      .toBe('https://res.cloudinary.com/demo/image/upload/l_text:roboto%20condensed_50:he%20llo/fl_layer_apply/sample');
  });

  it ('Should encode cloudinary characters ("/,") in the text of a textLayer', () => {
    const tx = new TransformableImage('sample')
      .setConfig(CONFIG_INSTANCE)
      .overlay(Overlay.imageLayer(text('he,/ llo').fontFamily('arial').fontSize(50)));

    expect(tx.toString())
      // Correctly serialize the cloudinary control characters
      .toBe('l_text:arial_50:he%2C%2F llo/fl_layer_apply');

    expect(tx.toURL())
      // Add URL encoding on top of serialization
      .toBe('https://res.cloudinary.com/demo/image/upload/l_text:arial_50:he%252C%252F%20llo/fl_layer_apply/sample');
  });



  it ('Fetch: should not encode ("$:/") signs', () => {
    const url = new TransformableImage('https://res.cloudinary.com/demo/image/upload/sample?a=b')
      .setConfig(CONFIG_INSTANCE)
      .describeAsset({
        assetType: 'image',
        storageType: 'fetch'
      })
      .toURL();

    expect(url)
      .toBe('https://res.cloudinary.com/demo/image/fetch/https://res.cloudinary.com/demo/image/upload/sample%3Fa%3Db');
  });

  it ('Should ', () => {
    const url = new TransformableImage('https://www.youtube.com/watch?v=d9NF2edxy-M')
      .setConfig(CONFIG_INSTANCE)
      .describeAsset({
        assetType: 'image',
        storageType: 'youtube'
      })
      .toURL();

    expect(url)
      .toBe('https://res.cloudinary.com/demo/image/youtube/https://www.youtube.com/watch%3Fv%3Dd9NF2edxy-M');
  });

  it ('Should encode a space in publicID', () => {
    const url = new TransformableImage('sa mple')
      .setConfig(CONFIG_INSTANCE)
      .toURL();

    expect(url)
      .toBe('https://res.cloudinary.com/demo/image/upload/sa%20mple');
  });

  it('should serialize nested texts correctly (text inside an image inside an image)', () => {
    const tx = new TransformableImage('woman')
      .setConfig(CONFIG_INSTANCE)
      .overlay(Overlay.imageLayer(
        image('sample')
          .overlay(Overlay.imageLayer(text('he,/llo').fontFamily('arial').fontSize(50)))
      ));

    expect(tx.toString())
      .toBe('l_sample/l_text:arial_50:he%2C%2Fllo/fl_layer_apply/fl_layer_apply');

    expect(tx.toURL())
      .toBe('https://res.cloudinary.com/demo/image/upload/l_sample/l_text:arial_50:he%252C%252Fllo/fl_layer_apply/fl_layer_apply/woman');
  });
});