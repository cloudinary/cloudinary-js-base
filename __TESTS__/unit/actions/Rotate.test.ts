import * as Rotate from '../../../src/actions/rotate';
import {CloudinaryImage} from "../../../src/assets/CloudinaryImage";
import CloudinaryConfig from "../../../src/sdk/config/CloudinaryConfig";
import * as RotationMode from "../../../src/values/RotationMode";

const CONFIG_INSTANCE = new CloudinaryConfig({
  cloud: {
    cloudName: 'demo'
  }
});

describe('Tests for Transformation Action -- Rotate', () => {
  it('Creates a cloudinaryURL with Rotate', () => {
    const url = new CloudinaryImage()
      .setConfig(CONFIG_INSTANCE)
      .rotate(Rotate.mode(RotationMode.verticalFlip()))
      .rotate(Rotate.mode(RotationMode.horizontalFlip()))
      .rotate(Rotate.mode(RotationMode.autoLeft()))
      .rotate(Rotate.mode(RotationMode.autoRight()))
      .rotate(Rotate.mode(RotationMode.ignore()))
      .rotate(Rotate.byAngle(40))
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('/a_vflip/a_hflip/a_auto_left/a_auto_right/a_ignore/a_40/');
  });
});
