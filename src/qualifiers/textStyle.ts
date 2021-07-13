import {normal as normalFontWeight} from "./fontWeight";
import {normal as normalFontStyle} from "./fontStyle";
import {normal as normalTextDecoration} from "./textDecoration";
import {serializeCloudinaryCharacters} from "../internal/utils/serializeCloudinaryCharacters";

/**
 * @summary qualifier
 * @description Specifies how to style your layered text, controls the font, font size, line spacing and more.
 * </br><b>Learn more</b>: {@link https://cloudinary.com/documentation/image_transformations#adding_text_overlays | Adding text overlays to images}
 * </br><b>Learn more</b>: {@link https://cloudinary.com/documentation/video_manipulation_and_delivery#adding_text_captions | Adding text overlays to videos}
 * @see {@link Actions.Overlay| The overlay action}
 * @see {@link Actions.Underlay| The underlay action}
 * @memberOf Qualifiers
 */
class TextStyle {
  private _lineSpacing: number;
  private _letterSpacing: number;
  private _fontAntialias: string;
  private _fontFamily: string;
  private _fontSize: number | string;
  private _fontWeight: string;
  private _fontStyle: string;
  private _textDecoration: string;
  private _textAlignment: string;
  private _stroke: boolean;
  private _strokeStyle: string;
  private _fontHinting: string;

  /**
   * @param {string} fontFamily The font family
   * @param {number | string} fontSize The font size
   */
  constructor(fontFamily: string, fontSize: string | number) {
    if (!fontFamily || !fontSize) {
      throw `You must provide a fontFamily and fontSize to a TextStyle`;
    }
    this._fontFamily = fontFamily;
    this._fontSize = fontSize;
  }

  /**
   * @param {number} spacing The spacing between multiple lines in pixels.
   */
  lineSpacing(spacing: number): this {
    this._lineSpacing = spacing;
    return this;
  }


  /**
   * @param spacing The spacing between the letters, in pixels.
   */
  letterSpacing(spacing: number): this {
    this._letterSpacing = spacing;
    return this;
  }

  /**
   * The antialias setting to apply to the text. When this parameter is not specified, the default antialiasing for the subsystem and target device are applied.
   * @param antiAlias
   */
  fontAntialias(antiAlias: string): this {
    this._fontAntialias = antiAlias;
    return this;
  }

  /**
   * The name of any universally available font or a custom font, specified as the public ID of a raw, authenticated font in your account.
   * For details on custom fonts, see {@link https://cloudinary.com/documentation/image_transformations#using_custom_fonts_for_text_overlays|Using custom fonts for text overlays}.
   * @param {string} fontFamilyName
   */
  fontFamily(fontFamilyName: string): this {
    this._fontFamily = fontFamilyName;
    return this;
  }

  /**
   * @param {number} fontSize The font size
   */
  fontSize(fontSize: number | string): this {
    this._fontSize = fontSize ;
    return this;
  }

  /**
   * @param {string} fontWeight The font weight
   */
  fontWeight(fontWeight: 'normal' | 'bold' | 'thin' | 'light' | string): this {
    this._fontWeight = fontWeight;
    return this;
  }

  /**
   *
   * @param {string} fontStyle The font style.
   */
  fontStyle(fontStyle: 'normal' | 'italic' | string): this {
    this._fontStyle = fontStyle;
    return this;
  }

  /**
   * @param {string} fontHinting The outline hinting style to apply to the text. When this parameter is not specified, the default hint style for the font and target device are applied.
   */
  fontHinting(fontHinting: string): this {
    this._fontHinting = fontHinting;
    return this;
  }

  /**
   *
   * @param {string} textDecoration The font decoration type.
   */
  textDecoration(textDecoration: 'normal' | 'underline' | 'strikethrough' | string): this {
    this._textDecoration = textDecoration;
    return this;
  }


  /**
   * @param {string} textAlignment The text alignment
   */
  textAlignment(textAlignment: 'left' | 'center' | 'right' | 'end' | 'start' | 'justify' | string): this {
    this._textAlignment = textAlignment;
    return this;
  }

  /**
   * @description Whether to include an outline stroke. Set the color and weight of the stroke
   */
  stroke(textStroke?: string): this {
    if(textStroke) {
      this._strokeStyle = textStroke;
    }
    this._stroke = true;
    return this;
  }

  toString(): string {
    return [
      `${serializeCloudinaryCharacters(this._fontFamily)}_${this._fontSize}`,
      this._fontWeight !== normalFontWeight() && this._fontWeight,
      this._fontStyle !== normalFontStyle() && this._fontStyle,
      this._textDecoration !== normalTextDecoration() && this._textDecoration,
      this._textAlignment,
      this._stroke && 'stroke',
      this._strokeStyle,
      this._letterSpacing && `letter_spacing_${this._letterSpacing}`,
      this._lineSpacing && `line_spacing_${this._lineSpacing}`,
      this._fontAntialias && `antialias_${this._fontAntialias}`,
      this._fontHinting && `hinting_${this._fontHinting}`
    ].filter( (a) => a).join('_');
  }
}

export {TextStyle};
