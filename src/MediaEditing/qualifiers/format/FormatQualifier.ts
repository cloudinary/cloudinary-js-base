import {QualifierValue} from "../../internal/qualifier/QualifierValue";

/**
 * @memberOf Qualifiers.Format
 * @extends {SDK.QualifierValue}
 */
class FormatQualifier extends QualifierValue {
  constructor(val: string) {
    super(val);
  }
}

export {FormatQualifier};
