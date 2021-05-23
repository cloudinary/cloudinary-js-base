import getImageWithResize from "./shared/getImageWithResize";
import {minimumFit} from "../../../../src/MediaEditing/actions/resize";

describe('Tests for Transformation Action -- Resize.minimumFit', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(minimumFit(250, 250), 'url');
    expect(url).toContain('c_mfit,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      minimumFit()
        .width(250)
        .height(250),
      'url');
    expect(url).toContain('c_mfit,h_250,w_250');
  });
});
