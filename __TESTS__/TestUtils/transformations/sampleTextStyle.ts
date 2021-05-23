import {TextStyle} from "../../../src/MediaEditing/qualifiers/textStyle";
import {FontAntialias} from "../../../src/MediaEditing/qualifiers/FontAntialias";
import {FontWeight} from "../../../src/MediaEditing/qualifiers/fontWeight";
import {FontHinting} from "../../../src/MediaEditing/qualifiers/fontHinting";
import {TextDecoration} from "../../../src/MediaEditing/qualifiers/textDecoration";
import {TextAlignment} from "../../../src/MediaEditing/qualifiers/textAlignment";
import {FontStyle} from "../../../src/MediaEditing/qualifiers/fontStyle";

/**
 * Creates a TextStyle instance used for testing
 */
function sampleTextStyle(): TextStyle {
  return new TextStyle('arial', 50)
    .letterSpacing(10)
    .lineSpacing(20)
    .fontAntialias(FontAntialias.good())
    .fontWeight(FontWeight.bold())
    .fontHinting(FontHinting.full())
    .textDecoration(TextDecoration.strikethrough())
    .textAlignment(TextAlignment.justify())
    .stroke()
    .fontStyle(FontStyle.italic()
    );
}


export {sampleTextStyle};
