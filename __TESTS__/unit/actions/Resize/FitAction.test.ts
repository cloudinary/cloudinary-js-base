import getImageWithResize from "./shared/getImageWithResize";
import {fit} from "../../../../src/MediaEditing/actions/resize";

describe('Tests for Transformation Action -- Resize.fill', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(fit(250, 250), 'url');
    expect(url).toContain('c_fit,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      fit()
        .width(250)
        .height(250)
        .aspectRatio(1.2)
        .relative(),
      'url');
    expect(url).toContain('ar_1.2,c_fit,fl_relative,h_250,w_250');
  });
});
