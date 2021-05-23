import getImageWithResize from "./shared/getImageWithResize";
import {imaggaCrop} from "../../../../src/MediaEditing/actions/resize";


describe('Tests for Transformation Action -- Resize.imaggaCrop', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(imaggaCrop(250, 250), 'url');
    expect(url).toContain('c_imagga_crop,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      imaggaCrop()
        .width(250)
        .height(250)
        .aspectRatio(1.2)
        .relative(),
      'url');
    expect(url).toContain('ar_1.2,c_imagga_crop,fl_relative,h_250,w_250');
  });
});
