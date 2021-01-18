import {Action} from "../../internal/Action";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";

/**
 * @description Represents a layer in a Photoshop document.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/paged_and_layered_media#deliver_selected_layers_of_a_psd_image | Deliver selected layers of a PSD image}
 * @memberOf Actions.PSDTools
 * @extends {SDK.Action}
 */
class GetLayerAction extends Action {
  private name: string;
  private qualifierValue = new QualifierValue();

  constructor() {
    super();
    this.qualifierValue.delimiter = ';';
  }

  /**
   * @description deliver an image containing only specified layer of a Photoshop image from The layer index
   * @param {string|number}  the index of the layer
   */
  byIndex(from: string|number): this{
    this.qualifierValue.addValue(from);
    return this;
  }

  /**
   * @description deliver an image containing only specified range of layers of a Photoshop image
   * @param {string|number} from The layer number
   * @param {string|number} to The layer number
   */
  byRange(from: string|number, to: string|number): this{
    const range = new QualifierValue(from);
    range.addValue(to);
    range.delimiter = '-';

    this.qualifierValue.addValue(range);
    return this;
  }

  /**
   * @description deliver an image containing only specified layer by name of a Photoshop image
   * @param {string|number} name The layer by name
   */
  byName(name: string): this{
    this.name = name;
    this.qualifierValue.addValue(name);
    return this;
  }

  protected prepareQualifiers(): this {
    let qualifierValue = this.qualifierValue;
    if(this.name) {
      qualifierValue = new QualifierValue(['name', this.qualifierValue]).setDelimiter(':');
    }

    this.addQualifier(new Qualifier('pg', qualifierValue));
    return this;
  }
}

export default GetLayerAction;
