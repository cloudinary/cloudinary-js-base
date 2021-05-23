import {AspectRatio} from "../../../../src/MediaEditing/qualifiers/aspectRatio";
import {createNewImage} from "../../../TestUtils/createCloudinaryImage";
import {crop} from "../../../../src/MediaEditing/actions/resize";


describe('Tests for AspectRatio values Action -- Resize.crop', () => {
  it('Generates URL using AspectRatio options', () => {
    const url = createNewImage('sample')
      .resize(
        crop().aspectRatio(AspectRatio.ar1X1())
      )
      .resize(
        crop().aspectRatio(AspectRatio.ar16X9())
      )
      .resize(
        crop().aspectRatio(AspectRatio.ar4X3())
      )
      .resize(
        crop().aspectRatio(AspectRatio.ar3X2())
      )
      .resize(
        crop().aspectRatio(AspectRatio.ar3X1())
      )
      .resize(
        crop().aspectRatio(AspectRatio.ar5X4())
      )
      .resize(
        crop().aspectRatio(AspectRatio.ignoreInitialAspectRatio())
      )
      .setPublicID('sample')
      .toURL();

    expect(url).toContain('ar_1:1,c_crop/ar_16:9,c_crop/ar_4:3,c_crop/ar_3:2,c_crop/ar_3:1,c_crop/ar_5:4,c_crop/c_crop,fl_ignore_aspect_ratio');
  });
});
