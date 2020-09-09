import getImageWithResize from "./shared/getImageWithResize";
import fill from "../../../../src/actions/resize/ResizeActions/FillAction";
import Gravity from "../../../../src/params/gravity/Gravity";


describe('Tests for Transformation Action -- Resize.fill', () => {
  it('Ensures it generates the right URL', () => {
    const url = getImageWithResize(fill(250, 250), 'url');
    expect(url).toContain('c_fill,h_250,w_250');
  });

  it('Ensures it generates the right URL using qualifiers', () => {
    const url = getImageWithResize(
      fill()
        .width(250)
        .height(250)
        .gravity(Gravity.face())
        .aspectRatio(1.2),
      'url');
    expect(url).toContain('ar_1.2,c_fill,g_face,h_250,w_250');
  });
});