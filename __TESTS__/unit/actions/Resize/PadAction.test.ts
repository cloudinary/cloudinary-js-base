import getImageWithResize from "./shared/getImageWithResize";
import {pad} from "../../../../src/MediaEditing/actions/resize";
import {Background} from "../../../../src/MediaEditing/qualifiers/background";
import {Gravity} from "../../../../src/MediaEditing/qualifiers/gravity";

describe('Tests for Transformation Action -- Resize.pad', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(pad(250, 250), 'url');
    expect(url).toContain('c_pad,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      pad()
        .width(250)
        .height(250)
        .gravity(Gravity.autoGravity())
        .offsetX(10)
        .offsetY(10)
        .background(Background.color('red'))
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,b_red,c_pad,g_auto,h_250,w_250,x_10,y_10');
  });
});
