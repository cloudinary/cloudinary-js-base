import {TextStyle} from "../../../../src/qualifiers/textStyle";
import {FontStyle} from "../../../../src/qualifiers/fontStyle";
import {FontAntialias} from "../../../../src/qualifiers/FontAntialias";
import {FontWeight} from "../../../../src/qualifiers/fontWeight";
import {FontHinting} from "../../../../src/qualifiers/fontHinting";
import {TextDecoration} from "../../../../src/qualifiers/textDecoration";
import {TextAlignment} from "../../../../src/qualifiers/textAlignment";
import {Stroke} from "../../../../src/qualifiers/textStroke";
import {Color} from "../../../../src/qualifiers/color";

describe('Text Style tests', () => {
  it('Create a new instance', () => {
    const res = new TextStyle('arial', 50)
      .toString();
    expect(res).toBe('arial_50');
  });

  it('Create a new with italic', () => {
    const res = new TextStyle('arial', 50)
      .fontStyle(FontStyle.italic())
      .toString();
    expect(res).toBe('arial_50_italic');
  });

  it('Create a new with all options', () => {
    const res = new TextStyle('arial', 50)
      .letterSpacing(10)
      .lineSpacing(20)
      .fontAntialias(FontAntialias.good())
      .fontWeight(FontWeight.bold())
      .fontHinting(FontHinting.full())
      .textDecoration(TextDecoration.strikethrough())
      .textAlignment(TextAlignment.justify())
      .stroke()
      .fontStyle(FontStyle.italic())
      .toString();
    expect(res).toBe('arial_50_bold_italic_strikethrough_justify_stroke_letter_spacing_10_line_spacing_20_antialias_good_hinting_full');
  });

  it('Create a new instance with stroke solid', () => {
    const res = new TextStyle('arial', 50)
      .stroke(Stroke.solid(2, Color.WHITE))
      .toString();
    expect(res).toBe('arial_50_stroke_bo_2px_solid_white');
  });


  it('Ensure normal is not included in the URL(this is the default)', () => {
    const res = new TextStyle('arial', 50)
      .fontWeight(FontWeight.normal())
      .textDecoration(TextDecoration.normal())
      .fontStyle(FontStyle.normal())
      .toString();
    expect(res).toBe('arial_50');
  });
});
