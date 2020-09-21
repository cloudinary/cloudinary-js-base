import Border from '../../../src/actions/border/Border';
import * as BorderESM from '../../../src/actions/border/Border';
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import * as Colors from "../../../src/values/colors/Colors";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";

const {type, SOLID} = Border;

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Border', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(BorderESM, Border);
  });

  it('Is accepted as an action to TransformableImage', () => {
    const tImage = new TransformableImage();
    // Ensures it compiles and doesn't throw
    expect(
      tImage.border(type(SOLID).width(50).color('green'))
    ).toEqual(tImage);
  });

  it('Ensure the "solid" methods are chainable', () => {
    const borderActionInstance = type(SOLID);

    expect(borderActionInstance.width(50)).toEqual(borderActionInstance);
    expect(borderActionInstance.color(Colors.RED)).toEqual(borderActionInstance);
  });

  it('Creates a cloudinaryURL with border and color', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .border(Border.type(SOLID)
        .width(7)
        .color(Colors.RED))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/bo_7px_solid_red/sample');
  });

  it('Creates a cloudinaryURL with border and rgb #0000ff', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .border(Border.type(SOLID)
        .width(7)
        .color('#0000ff'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/bo_7px_solid_rgb:0000ff/sample');
  });

  it('Creates a cloudinaryURL with border and rgb #FFF', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .border(Border.type(SOLID)
        .width(7)
        .color('#FFF'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/bo_7px_solid_rgb:FFF/sample');
  });

  it('Creates a cloudinaryURL with border and rgb #FFFFFFFF', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .border(Border.type(SOLID)
        .width(7)
        .color('#FFFFFFFF'))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('http://res.cloudinary.com/demo/image/upload/bo_7px_solid_rgb:FFFFFFFF/sample');
  });
});
