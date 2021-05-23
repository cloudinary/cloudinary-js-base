import {QualifierValue} from "../../internal/qualifier/QualifierValue";

/**
 * @description Acts as a marker for inputs passed into Rotate.mode()
 * @memberOf Qualifiers.RotationMode
 * @extends SDK.QualifierValue
 */
class RotationModeQualifierValue extends QualifierValue {
  private readonly val: string;

  constructor(val: string) {
    super();
    this.val = val;
  }

  toString(): string {
    return this.val;
  }
}


export {RotationModeQualifierValue};
