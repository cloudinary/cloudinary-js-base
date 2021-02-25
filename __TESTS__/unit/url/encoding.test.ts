import {image, text} from "../../../src/qualifiers/source";
import {Transformation} from "../../../src/transformation/Transformation";
import {Overlay} from "../../../src/actions/overlay";
import {sampleTextStyle} from "../../TestUtils/transformations/sampleTextStyle";
import {sampleEmptyTextStyle} from "../../TestUtils/transformations/sampleEmptyTextStyle";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";


describe('Tests for Encoding the URL', () => {
  it('Should serialize, but not encode, when calling toString', () => {
    const str = createNewImage()
      .overlay(Overlay.source(text('he llo', sampleTextStyle())))
      .toString();
    expect(str).toBe(`l_text:${sampleTextStyle()}:he llo/fl_layer_apply`);
  });

  it('Should encode cloudinary characters (",") in a publicID', () => {
    const url = createNewImage('sam,ple')
      .toURL();
    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/sam%252Cple');
  });

  it('Does not mutate valid / in publicID', () => {
    const url = createNewImage('folder/name')
      .toURL();
    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/v1/folder/name');
  });

  it('Should encode regular text in a textLayer', () => {
    const url = createNewImage('sample')
      .overlay(Overlay.source(text('he llo', sampleEmptyTextStyle())))
      .toURL();

    expect(url)
      // Space encoded correctly to %20
      .toBe('https://res.cloudinary.com/demo/image/upload/l_text:arial_50:he%20llo/fl_layer_apply/sample');
  });

  it('Should encode emojis in text of a textLayer', () => {
    const url = createNewImage('sample')
      .overlay(Overlay.source(text( "😁♂", sampleEmptyTextStyle())))
      .toURL();

    expect(url)
      .toBe('https://res.cloudinary.com/demo/image/upload/l_text:arial_50:%25F0%259F%2598%2581%E2%99%82/fl_layer_apply/sample');
  });

  it('Should encode font name in textOverlay', () => {
    const cldImage = createNewImage('sample')
      .overlay(Overlay.source(text('he llo', sampleEmptyTextStyle('roboto condensed'))));

    expect(cldImage.toString())
      // Correctly serialize the cloudinary control characters
      .toBe('l_text:roboto condensed_50:he llo/fl_layer_apply');

    expect(cldImage.toURL())
      // Space encoded correctly to %20
      .toBe('https://res.cloudinary.com/demo/image/upload/l_text:roboto%20condensed_50:he%20llo/fl_layer_apply/sample');
  });

  it('Should encode cloudinary characters ("/,") in the text of a textLayer', () => {
    const cldImage = createNewImage('sample')
      .overlay(Overlay.source(text('he,/ llo', sampleEmptyTextStyle())));

    // Correctly serialize the cloudinary control characters
    expect(cldImage.toString()).toBe('l_text:arial_50:he%2C%2F llo/fl_layer_apply');

    // Add URL encoding on top of serialization
    expect(cldImage.toURL()).toBe('https://res.cloudinary.com/demo/image/upload/l_text:arial_50:he%252C%252F%20llo/fl_layer_apply/sample');
  });

  it('Fetch: should not encode ("$:/") signs', () => {
    const img = createNewImage('https://res.cloudinary.com/demo/image/upload/sample?a=b');
    img.storageType = 'fetch';

    expect(img.toURL())
      .toBe('https://res.cloudinary.com/demo/image/fetch/https://res.cloudinary.com/demo/image/upload/sample%3Fa%3Db');
  });

  it('Should ', () => {
    const img = createNewImage('https://www.youtube.com/watch?v=d9NF2edxy-M');
    img.storageType = 'youtube';

    expect(img.toURL())
      .toBe('https://res.cloudinary.com/demo/image/youtube/https://www.youtube.com/watch%3Fv%3Dd9NF2edxy-M');
  });

  it('Should encode a space in publicID', () => {
    const url = createNewImage('sa mple')
      .toURL();

    expect(url)
      .toBe('https://res.cloudinary.com/demo/image/upload/sa%20mple');
  });

  it('should serialize nested texts correctly (text inside an image inside an image)', () => {
    const cldImage = createNewImage('woman')
      .overlay(Overlay.source(
        image('sample')
          .transformation(
            new Transformation().overlay(
              Overlay.source(text('he,/llo', sampleEmptyTextStyle()))
            )
          )
      ));

    expect(cldImage.toString())
      .toBe(`l_sample/l_text:arial_50:he%2C%2Fllo/fl_layer_apply/fl_layer_apply`);

    expect(cldImage.toURL())
      .toBe(`https://res.cloudinary.com/demo/image/upload/l_sample/l_text:arial_50:he%252C%252Fllo/fl_layer_apply/fl_layer_apply/woman`);
  });
});
