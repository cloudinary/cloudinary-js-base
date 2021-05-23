import {ChromaSubSampling} from "../../../src/MediaEditing/qualifiers/chromaSubSampling";
import {Quality} from "../../../src/MediaEditing/qualifiers/quality";
import {Delivery} from "../../../src/MediaEditing/actions/delivery";
import {createNewImage} from "../../TestUtils/createCloudinaryImage";


describe('Tests for Transformation Action -- Delivery.quality', () => {
  it('Ensures auto is accepted as an action to ImageTransformation', () => {
    const tImage = createNewImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.quality(Delivery.quality('80'))
    ).toEqual(tImage);
  });

  it('Creates a cloudinaryURL with quality', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality(Quality.auto()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_auto/sample');
  });

  it('Creates a cloudinaryURL with quality:best', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality(Quality.autoBest()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_auto:best/sample');
  });

  it('Creates a cloudinaryURL with quality:eco', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality(Quality.autoEco()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_auto:eco/sample');
  });

  it('Creates a cloudinaryURL with quality:good', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality(Quality.autoGood()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_auto:good/sample');
  });

  it('Creates a cloudinaryURL with quality:low', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality(Quality.autoLow()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_auto:low/sample');
  });

  it('Creates a cloudinaryURL with jpegmini', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality(Quality.jpegmini()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_jpegmini/sample');
  });

  it('Creates a cloudinaryURL with jpegmini HIGH', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality(Quality.jpegminiHigh()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_jpegmini:1/sample');
  });

  it('Creates a cloudinaryURL with jpegmini MEDIUM', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality(Quality.jpegminiMedium()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_jpegmini:2/sample');
  });

  it('Creates a cloudinaryURL with jpegmini BEST', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality(Quality.jpegminiBest()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_jpegmini:0/sample');
  });

  it('Creates a cloudinaryURL with level', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality('75').chromaSubSampling(ChromaSubSampling.chroma420()))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_75:420/sample');
  });

  it('Sets Quanitzation level', () => {
    const url = createNewImage('sample')
      .delivery(Delivery.quality('75').quantization(123))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/q_75:qmax_123/sample');
  });
});
