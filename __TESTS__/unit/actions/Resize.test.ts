import getImageWithResize from "./Resize/shared/getImageWithResize";
import * as Resize from "../../../src/MediaEditing/actions/resize";
import {Expression} from "../../../src/MediaEditing/qualifiers/expression";


describe('Tests for Transformation Action -- Resize', () => {
  it('Resize with a resize mode - relative', () => {
    const url = getImageWithResize(Resize.scale(100).relative(), 'url');
    expect(url).toContain('c_scale,fl_relative,w_100');
  });

  it('Resize with a resize mode - region_relative', () => {
    const url = getImageWithResize(Resize.scale(100).regionRelative(), 'url');
    expect(url).toContain('c_scale,fl_region_relative,w_100');
  });

  it('Resize with an expression', () => {
    const url = getImageWithResize(Resize.scale().width(Expression.expression('100 + 5')), 'url');
    expect(url).toContain('c_scale,w_100_add_5');
  });
});
