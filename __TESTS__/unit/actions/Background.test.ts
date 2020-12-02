import * as Background from "../../../src/actions/background/Background";
import TransformableImage from '../../../src/transformation/TransformableImage';
import CloudinaryConfig from "../../../src/config/CloudinaryConfig";
import {Color} from "../../../src/values/color/Color";
import * as Resize from "../../../src/actions/resize/Resize";
import {
  auto,
  border,
  color,
  borderGradient,
  predominant,
  predominantGradient,
  blurred
} from "../../../src/values/background/Background";
import {GradientDirection} from "../../../src/values/gradientDirection/GradientDirection";


const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});


describe('Tests for Transformation Action -- Background', () => {
  it('Creates a cloudinaryURL with Background.auto', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .backgroundColor(Background.color(Color.RED))
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/b_red/sample');
  });


  it('Background.border().contrast()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(250, 250)
        .background(border().contrast())
      )
      .resize(Resize.pad(250, 250)
        .background(border())
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('image/upload/b_auto:border_contrast,c_pad,h_250,w_250/b_auto:border,c_pad,h_250,w_250/sample');
  });

  it('Background.border().contrast().palette()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(250, 250)
        .background(border().contrast().palette('red', 'green', 'blue'))
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('image/upload/b_auto:border_contrast:palette_red_green_blue,c_pad,h_250,w_250/sample');
  });


  it('Background.auto()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(250, 250)
        .background(auto())
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('image/upload/b_auto,c_pad,h_250,w_250/sample');
  });

  it('Background.borderGradient().gradientDirection().gradientColors()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(250, 250)
        .background(borderGradient()
          .gradientDirection(GradientDirection.horizontal())
          .gradientColors(2)
          .contrast()
          .palette('red', 'green', 'blue')
        )
      )
      .resize(Resize.pad(250, 250)
        .background(borderGradient()
        )
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('image/upload/b_auto:border_gradient_contrast:2:horizontal:palette_red_green_blue,c_pad,h_250,w_250/b_auto:border_gradient,c_pad,h_250,w_250/sample');
  });

  it('Background.predominantGradient().gradientDirection().gradientColors()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(250, 250)
        .background(predominantGradient()
          .gradientDirection(GradientDirection.horizontal())
          .gradientColors(2)
          .contrast()
          .palette('red', 'green', 'blue')
        )
      )
      .resize(Resize.pad(250, 250)
        .background(predominantGradient())
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('image/upload/b_auto:predominant_gradient_contrast:2:horizontal:palette_red_green_blue,c_pad,h_250,w_250/b_auto:predominant_gradient,c_pad,h_250,w_250/sample');
  });



  it('Background.Color()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(250, 250)
        .background(color('red'))
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toBe('https://res.cloudinary.com/demo/image/upload/b_red,c_pad,h_250,w_250/sample');
  });

  it('Background.predominant().contrast().palette()', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(250, 250)
        .background(predominant().contrast().palette('red', 'green', 'blue'))
      )
      .resize(Resize.pad(250, 250)
        .background(predominant())
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('image/upload/b_auto:predominant_contrast:palette_red_green_blue,c_pad,h_250,w_250/b_auto:predominant,c_pad,h_250,w_250/sample');
  });


  it('Test blurred background', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(250, 250)
        .background(blurred())
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('b_blurred');
  });

  it('Test blurred background with one qualifiers', () => {
    const url = new TransformableImage()
      .setConfig(CONFIG_INSTANCE)
      .resize(Resize.pad(250, 250)
        .background(blurred().intensity(100).brightness(100))
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('b_blurred:100:100');
  });
});
