import getImageWithResize from "./shared/getImageWithResize";
import {limitFit} from "../../../../src/MediaEditing/actions/resize";

describe('Tests for Transformation Action -- Resize.limitFit', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(limitFit(250, 250), 'url');
    expect(url).toContain('c_limit,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      limitFit()
        .width(250)
        .height(250),
      'url');
    expect(url).toContain('c_limit,h_250,w_250');
  });
});
