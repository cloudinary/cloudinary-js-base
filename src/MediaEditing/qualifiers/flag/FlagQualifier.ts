import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";

/**
 * @memberOf Qualifiers.Flag
 * @extends {SDK.Qualifier}
 * @description the FlagQualifier class
 */
class FlagQualifier extends Qualifier {
  constructor(flagType?: QualifierValue | QualifierValue[] | number | number[] | string | string[], flagValue?: string) {
    let qualifierValue;
    if(flagValue) {
      qualifierValue = new QualifierValue([flagType, `${flagValue}`]).setDelimiter(':');
    }else {
      qualifierValue = flagType;
    }
    super('fl', qualifierValue);
  }

  toString() {
    return super.toString().replace(/\./, '%2E');
  }
}

export {FlagQualifier};
