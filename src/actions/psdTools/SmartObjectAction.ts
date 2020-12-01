import Action from "../Action";
import Qualifier from "../../qualifier/Qualifier";
import QualifierValue from "../../qualifier/QualifierValue";

/**
 * @description Represents an embedded smart object in a Photoshop document.
 *
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/paged_and_layered_media#extract_the_original_content_of_an_embedded_object
  * | Extract the original content of an embedded Photoshop object}
 * @class SmartObjectAction
 * @augments Action
 */
class SmartObjectAction extends Action{
  private smartObjectValue: string|number;
  private qualifierValue = new QualifierValue();
  private useName = false;
  constructor() {
    super();
    this.qualifierValue.delimiter = ';';
  }

  /**
   * @description Creates a new instance using the specified number.
   * @param index The number.
   */
  byIndex(index: string|number): this{
    this.smartObjectValue = index;
    this.qualifierValue.addValue(index);
    return this;
  }

  /**
   * @description Creates an instance using the name.
   * @param fileName The name
   */
  byFileName(fileName:string): this{
    this.useName = true;
    this.qualifierValue.addValue(fileName);
    return this;
  }

  protected prepareQualifiers() : void {
    let qualifierValue;
    if (this.useName) {
      qualifierValue = new QualifierValue(['embedded:name', this.qualifierValue]);
    } else {
      qualifierValue = new QualifierValue(['embedded', this.qualifierValue]);
    }

    this.addQualifier(new Qualifier('pg', qualifierValue));
  }
}

export default SmartObjectAction;
