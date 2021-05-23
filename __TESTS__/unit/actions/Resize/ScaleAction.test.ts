import getImageWithResize from "./shared/getImageWithResize";
import {scale} from "../../../../src/MediaEditing/actions/resize";


describe('Tests for Transformation Action -- Resize.scale', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(scale(250, 250), 'url');
    expect(url).toContain('c_scale,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      scale()
        .width(250)
        .height(250)
        .liquidRescaling()
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,c_scale,g_liquid,h_250,w_250');
  });
});
