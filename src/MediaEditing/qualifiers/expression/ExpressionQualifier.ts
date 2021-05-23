import {QualifierValue} from "../../internal/qualifier/QualifierValue";

/**
 * @namespace Expression
 * @memberOf Qualifiers.Expression
 * @extends {SDK.QualifierValue}
 */
class ExpressionQualifier extends QualifierValue {
  readonly value: string;

  constructor(value?: string) {
    super();
    this.value = value;
  }

  toString(): string {
    return this.value;
  }
}

export { ExpressionQualifier} ;
