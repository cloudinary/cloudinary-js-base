import getImageWithResize from "./shared/getImageWithResize";
import * as Gravity from "../../../../src/MediaEditing/qualifiers/gravity";
import {crop} from "../../../../src/MediaEditing/actions/resize";


describe('Tests for Transformation Action -- Resize.crop', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(crop(250, 250), 'url');
    expect(url).toContain('c_crop,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      crop()
        .width(250)
        .height(250)
        .x(10)
        .y(10)
        .gravity(Gravity.autoGravity())
        .aspectRatio(1.2)
        .relative(),
      'url');
    expect(url).toContain('ar_1.2,c_crop,fl_relative,g_auto,h_250,w_250,x_10,y_10');
  });

  it('Ensures it generates the right URL using qualifiers (With region relative', () => {
    const url = getImageWithResize(
      crop()
        .regionRelative(),
      'url');
    expect(url).toContain('fl_region_relative');
  });

  it('Uses xyCenter as a gravity type', () => {
    const url = getImageWithResize(
      crop()
        .gravity(Gravity.xyCenter())
        .x(100)
        .y(100),
      'url');
    expect(url).toContain('g_xy_center,x_100,y_100');
  });
});
