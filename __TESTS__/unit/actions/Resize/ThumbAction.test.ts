import getImageWithResize from "./shared/getImageWithResize";
import {thumbnail} from "../../../../src/MediaEditing/actions/resize";
import {Compass} from "../../../../src/MediaEditing/qualifiers/compass";
import {Gravity} from "../../../../src/MediaEditing/qualifiers/gravity";

describe('Tests for Transformation Action -- Resize.thumb()', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(thumbnail(250, 250), 'url');
    expect(url).toContain('c_thumb,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      thumbnail()
        .width(250)
        .height(250)
        .aspectRatio(2)
        .gravity(Gravity.compass(Compass.west()))
        .zoom(2.5),
      'url');
    expect(url).toContain('ar_2.0,c_thumb,g_west,h_250,w_250,z_2.5');
  });
});
