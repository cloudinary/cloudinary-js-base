import {QualifierValue} from "../../../../internal/qualifier/QualifierValue";

/**
 * @memberOf Qualifiers.FocusOn
 * @extends {SDK.QualifierValue}
 */
class FocusOnValue extends QualifierValue {
  readonly name: string;

  constructor(name?: string) {
    super();
    this.name = name;
  }

  toString(): string {
    return this.name;
  }
}


export {FocusOnValue};
