import {BlendMode} from "../../../src/MediaEditing/qualifiers/blendMode";


describe('BlendMode Qualifier', () => {
  it('Tests simple gravitation', () => {
    expect(BlendMode.screen().toString()).toBe('e_screen');
    expect(BlendMode.multiply().toString()).toBe('e_multiply');
    expect(BlendMode.overlay().toString()).toBe('e_overlay');
    expect(BlendMode.mask().toString()).toBe('e_mask');
    expect(BlendMode.antiRemoval().toString()).toBe('e_anti_removal');
  });
});
