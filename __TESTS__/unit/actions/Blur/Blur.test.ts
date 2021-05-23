import {Region} from "../../../../src/MediaEditing/qualifiers/region";
import {Effect} from "../../../../src/MediaEditing/actions/effect";

describe('Tests for Transformation Action -- Blur', () => {
  it('Tests blur with and without strength', () => {
    expect(Effect.blur()
      .toString()
    ).toEqual('e_blur');

    expect(Effect.blur()
      .strength(10)
      .toString()
    ).toEqual('e_blur:10');
  });

  it('Test blur:faces', () => {
    expect(Effect.blur()
      .strength(50)
      .region(Region.faces()).toString()).toBe('e_blur_faces:50');
  });

  it('Test blur custom region', () => {
    expect(Effect.blur()
      .strength(10)
      .region(Region.custom()
        .height(20)
        .width(30)
        .x(40)
        .y(50)
      )
      .toString()
    )
      .toEqual('e_blur_region:10,h_20,w_30,x_40,y_50');
  });

  it('Test blur with Region.ocr', () => {
    expect(Effect.blur()
      .strength(10)
      .region(Region.ocr()
      )
      .toString()
    )
      .toEqual('e_blur_region:10,g_ocr_text');
  });
});
