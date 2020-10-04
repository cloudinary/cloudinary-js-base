import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import Adjust from '../../../src/actions/adjust/Adjust';
import * as AdjustESM from '../../../src/actions/adjust/Adjust';
import {TransformableImage} from "../../../src";
import expectESMToMatchDefault from "../../TestUtils/expectESMToMatchDefault";
import * as ImproveMode from "../../../src/values/improveMode/ImproveMode";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Adjust', () => {
  it('Expects ESM to match Default', () => {
    expectESMToMatchDefault(AdjustESM, Adjust);
  });

  it('Ensure leveledAdjusts work properly', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.autoBrightness())
      .adjust(Adjust.autoBrightness().level(50))
      .adjust(Adjust.autoBrightness(100))
      .adjust(Adjust.autoColor())
      .adjust(Adjust.autoColor().level(50))
      .adjust(Adjust.autoColor(100))
      .adjust(Adjust.autoContrast())
      .adjust(Adjust.autoContrast().level(50))
      .adjust(Adjust.autoContrast(100))
      .adjust(Adjust.red())
      .adjust(Adjust.red().level(50))
      .adjust(Adjust.red(100))
      .adjust(Adjust.green())
      .adjust(Adjust.green().level(50))
      .adjust(Adjust.green(100))
      .adjust(Adjust.blue())
      .adjust(Adjust.blue().level(50))
      .adjust(Adjust.blue(100))
      .adjust(Adjust.brightness())
      .adjust(Adjust.brightness().level(50))
      .adjust(Adjust.brightness(100))
      .adjust(Adjust.brightnessHSB())
      .adjust(Adjust.brightnessHSB().level(50))
      .adjust(Adjust.brightnessHSB(100))
      .adjust(Adjust.contrast())
      .adjust(Adjust.contrast().level(50))
      .adjust(Adjust.contrast(100))
      .adjust(Adjust.gamma())
      .adjust(Adjust.gamma().level(50))
      .adjust(Adjust.gamma(100))
      .adjust(Adjust.hue())
      .adjust(Adjust.hue().level(50))
      .adjust(Adjust.hue(100))
      .adjust(Adjust.opacityThreshold())
      .adjust(Adjust.opacityThreshold().level(50))
      .adjust(Adjust.opacityThreshold(100))
      .adjust(Adjust.saturation())
      .adjust(Adjust.saturation().level(50))
      .adjust(Adjust.saturation(100))
      .adjust(Adjust.sharpen())
      .adjust(Adjust.sharpen().level(50))
      .adjust(Adjust.sharpen(100))
      .adjust(Adjust.unsharpMask())
      .adjust(Adjust.unsharpMask().level(50))
      .adjust(Adjust.unsharpMask(100))
      .setPublicID('sample')
      .toURL();

    const expectedToContain = [
      'e_auto_brightness',
      'e_auto_brightness:50',
      'e_auto_brightness:100',
      'e_auto_color',
      'e_auto_color:50',
      'e_auto_color:100',
      'e_auto_contrast',
      'e_auto_contrast:50',
      'e_auto_contrast:100',
      'e_red',
      'e_red:50',
      'e_red:100',
      'e_green',
      'e_green:50',
      'e_green:100',
      'e_blue',
      'e_blue:50',
      'e_blue:100',
      'e_brightness',
      'e_brightness:50',
      'e_brightness:100',
      'e_brightness_hsb',
      'e_brightness_hsb:50',
      'e_brightness_hsb:100',
      'e_contrast',
      'e_contrast:50',
      'e_contrast:100',
      'e_gamma',
      'e_gamma:50',
      'e_gamma:100',
      'e_hue',
      'e_hue:50',
      'e_hue:100',
      'e_opacity_threshold',
      'e_opacity_threshold:50',
      'e_opacity_threshold:100',
      'e_saturation',
      'e_saturation:50',
      'e_saturation:100',
      'e_sharpen',
      'e_sharpen:50',
      'e_sharpen:100',
      'e_unsharp_mask',
      'e_unsharp_mask:50',
      'e_unsharp_mask:100'
    ].join('/');

    expect(url).toBe(`http://res.cloudinary.com/demo/image/upload/${expectedToContain}/sample`);
  });

  it('tests replaceColor', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust
        .replaceColor('red')
        .tolerance(30)
        .fromColor('blue'))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_replace_color:red:30:blue');
  });

  it('tests replaceColor - without fromColor', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.replaceColor('red'))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_replace_color:red');
  });

  it('tests recolor matrix', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.recolor([[0.1, 0.2, 0.3], [0.4, 0.5, 0.6], [0.7, 0.8, 0.9]]))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_recolor:0.1:0.2:0.3:0.4:0.5:0.6:0.7:0.8:0.9');
  });

  it('tests fillLight', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.fillLight().level(0).bias(0))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_fill_light:0:0');
  });

  it('tests improve', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .adjust(Adjust.improve().mode(ImproveMode.outdoor()).blend(0))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('e_improve:outdoor:0');
  });

  it('tests by3dLut', () => {
    expect(Adjust
      .by3dLut('sample')
      .toString()
    ).toBe('l_lut:sample/fl_layer_apply');
  });

  it('tests viesuscorrect', () => {
    expect(Adjust.viesusCorrect()
      .toString()).toBe('e_viesus_correct');

    expect(Adjust.viesusCorrect()
      .noRedEye()
      .toString()).toBe('e_viesus_correct:no_redeye');

    expect(Adjust.viesusCorrect()
      .skinSaturation()
      .toString()).toBe('e_viesus_correct:skin_saturation');

    expect(Adjust.viesusCorrect()
      .skinSaturation(10)
      .toString()).toBe('e_viesus_correct:skin_saturation_10');
  });
});
