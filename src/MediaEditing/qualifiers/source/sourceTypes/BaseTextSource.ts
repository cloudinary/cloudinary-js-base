import {BaseSource} from "../BaseSource";
import {SystemColors} from "../../color";
import {TextStyle} from "../../textStyle";
import {serializeCloudinaryCharacters} from "../../../internal/utils/serializeCloudinaryCharacters";
import {Action} from "../../../internal/Action";
import {Qualifier} from "../../../internal/qualifier/Qualifier";
import {prepareColor} from "../../../internal/utils/prepareColor";

/**
 * @memberOf Qualifiers.Source
 * @extends {Qualifiers.Source.BaseSource}
 * @description Defines the common interface for all text-based sources
 */
class BaseTextSource extends BaseSource {
  private text: string;
  protected _textStyle: TextStyle | string;
  protected _textColor: SystemColors
  protected _backgroundColor: SystemColors
  protected type = 'text';

  constructor(text: string, textStyle?: TextStyle | string) {
    super();
    this.text = text;
    this._textStyle = textStyle;
  }

  encodeText(text:string): string {
    return serializeCloudinaryCharacters(text);
  }

  textColor(color:SystemColors): this {
    this._textColor = color;
    return this;
  }

  backgroundColor(bgColor:SystemColors): this {
    this._backgroundColor = bgColor;
    return this;
  }

  /**
   * @description
   * Returns the opening string of the layer,
   * This method is used internally within {@link SDK.LayerAction|LayerAction}
   * @returns {string}
   */
  getOpenSourceString(layerType: 'u' | 'l'): string {
    const layerParam = [
      this.type,
      this._textStyle && this._textStyle.toString(),
      this.encodeText(this.text)
    ].filter((a) => a).join(':');


    const tmpAction = new Action();

    tmpAction.addQualifier(new Qualifier(layerType, layerParam));
    this._textColor && tmpAction.addQualifier(new Qualifier('co', prepareColor(this._textColor)));
    this._backgroundColor && tmpAction.addQualifier(new Qualifier('b', prepareColor(this._backgroundColor)));

    return tmpAction.toString();
  }
}

export {BaseTextSource};
