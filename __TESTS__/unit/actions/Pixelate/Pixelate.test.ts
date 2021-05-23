import {Region} from "../../../../src/MediaEditing/qualifiers/region";
import {Effect} from "../../../../src/MediaEditing/actions/effect";

describe('Tests for Transformation Action -- Pixelate', () => {
  it('Tests pixelate with and without squareSize', () => {
    expect(Effect.pixelate()
      .toString()
    ).toEqual('e_pixelate');

    expect(Effect.pixelate()
      .squareSize(10)
      .toString()
    ).toEqual('e_pixelate:10');
  });

  it('Test pixelate:faces', () => {
    expect(Effect.pixelate()
      .squareSize(50)
      .region(Region.faces()).toString()).toBe('e_pixelate_faces:50');
  });

  it('Test pixelate custom region', () => {
    expect(Effect.pixelate()
      .squareSize(10)
      .region(Region.custom()
        .height(20)
        .width(30)
        .x(40)
        .y(50)
      )
      .toString()
    )
      .toEqual('e_pixelate_region:10,h_20,w_30,x_40,y_50');
  });

  it('Test pixelate with Region.ocr', () => {
    expect(Effect.pixelate()
      .squareSize(10)
      .region(Region.ocr()
      )
      .toString()
    )
      .toEqual('e_pixelate_region:10,g_ocr_text');
  });
});
