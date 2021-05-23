import {TextStyle} from "../../../../src/MediaEditing/qualifiers/textStyle";
import {FontStyle} from "../../../../src/MediaEditing/qualifiers/fontStyle";
import {FontAntialias} from "../../../../src/MediaEditing/qualifiers/FontAntialias";
import {FontWeight} from "../../../../src/MediaEditing/qualifiers/fontWeight";
import {FontHinting} from "../../../../src/MediaEditing/qualifiers/fontHinting";
import {TextDecoration} from "../../../../src/MediaEditing/qualifiers/textDecoration";
import {TextAlignment} from "../../../../src/MediaEditing/qualifiers/textAlignment";

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

  it('Ensure normal is not included in the URL(this is the default)', () => {
    const res = new TextStyle('arial', 50)
      .fontWeight(FontWeight.normal())
      .textDecoration(TextDecoration.normal())
      .fontStyle(FontStyle.normal())
      .toString();
    expect(res).toBe('arial_50');
  });
});
