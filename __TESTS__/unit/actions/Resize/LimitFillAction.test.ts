import getImageWithResize from "./shared/getImageWithResize";
import {limitFill} from "../../../../src/MediaEditing/actions/resize";
import {Gravity} from "../../../../src/MediaEditing/qualifiers/gravity";


describe('Tests for Transformation Action -- Resize.limitFill', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(limitFill(250, 250), 'url');
    expect(url).toContain('c_lfill,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      limitFill()
        .width(250)
        .height(250)
        .gravity(Gravity.autoGravity())
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,c_lfill,g_auto,h_250,w_250');
  });

  it('Ensures it generates the right URL using xyGravity and x,y', () => {
    const url = getImageWithResize(
      limitFill()
        .width(250)
        .height(250)
        .x(100)
        .y(100)
        .gravity(Gravity.xyCenter())
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,c_lfill,g_xy_center,h_250,w_250,x_100,y_100');
  });
});
