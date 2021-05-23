import getImageWithResize from "./shared/getImageWithResize";
import * as Gravity from "../../../../src/MediaEditing/qualifiers/gravity";
import {fill} from "../../../../src/MediaEditing/actions/resize";


describe('Tests for Transformation Action -- Resize.fill', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(fill(250, 250), 'url');
    expect(url).toContain('c_fill,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      fill()
        .width(250)
        .height(250)
        .gravity(Gravity.autoGravity())
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,c_fill,g_auto,h_250,w_250');
  });

  it('Ensures it generates the right URL xyCenter and x,y', () => {
    const url = getImageWithResize(
      fill()
        .width(250)
        .height(250)
        .gravity(Gravity.xyCenter())
        .x(100)
        .y(100)
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,c_fill,g_xy_center,h_250,w_250,x_100,y_100');
  });
});
