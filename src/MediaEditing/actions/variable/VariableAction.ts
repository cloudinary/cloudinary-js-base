import {Action} from "../../internal/Action";
import {QualifierValue} from "../../internal/qualifier/QualifierValue";
import {Qualifier} from "../../internal/qualifier/Qualifier";
import {ExpressionQualifier} from "../../qualifiers/expression/ExpressionQualifier";

type TypeVariableValue = number | string | ExpressionQualifier;

/**
 * @description Defines an new user variable.
 * @memberOf Actions.Variable
 * @extends SDK.Action
 * @see Visit {@link Actions.Variable|Variable} for an example
 */
class VariableAction extends Action {
  private isFloat = false;
  private isNumber = false;
  protected readonly value: TypeVariableValue;
  protected readonly name: string;
  constructor(name: string, value: TypeVariableValue) {
    super();
    this.value = value;
    this.name = name;
  }

  /**
   * @description Converts the returned value to type float.
   */
  asFloat():this {
    this.isFloat = true;
    return this;
  }

  /**
   * @description Converts the returned value to type number.
   */
  asInteger(): this {
    this.isNumber = true;
    return this;
  }

  protected prepareQualifiers(): this {
    let qualifierValue;
    if(this.isFloat) {
      qualifierValue = new QualifierValue([this.value, 'to_f']).setDelimiter('_');
    }else if(this.isNumber) {
      qualifierValue = new QualifierValue([this.value, 'to_i']).setDelimiter('_');
    }else{
      qualifierValue = new QualifierValue(this.value);
    }

    this.addQualifier(new Qualifier(`$${this.name}`, qualifierValue));
    return this;
  }

}

export default VariableAction;
