import getImageWithResize from "./shared/getImageWithResize";
import {imaggaScale} from "../../../../src/MediaEditing/actions/resize";


describe('Tests for Transformation Action -- Resize.imaggaScale', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(imaggaScale(250, 250), 'url');
    expect(url).toContain('c_imagga_scale,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      imaggaScale()
        .width(250)
        .height(250)
        .aspectRatio(2),
      'url');
    expect(url).toContain('ar_2.0,c_imagga_scale,h_250,w_250');
  });
});
