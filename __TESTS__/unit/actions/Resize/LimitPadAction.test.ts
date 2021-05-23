import getImageWithResize from "./shared/getImageWithResize";
import {limitPad} from "../../../../src/MediaEditing/actions/resize";
import {Background} from "../../../../src/MediaEditing/qualifiers/background";
import {Gravity} from "../../../../src/MediaEditing/qualifiers/gravity";

describe('Tests for Transformation Action -- Resize.limitPad', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(limitPad(250, 250), 'url');
    expect(url).toContain('c_lpad,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      limitPad()
        .width(250)
        .height(250)
        .aspectRatio(2)
        .offsetX(10)
        .offsetY(10)
        .gravity(Gravity.autoGravity())
        .background(Background.color('red')),
      'url');
    expect(url).toContain('ar_2.0,b_red,c_lpad,g_auto,h_250,w_250,x_10,y_10');
  });
});
