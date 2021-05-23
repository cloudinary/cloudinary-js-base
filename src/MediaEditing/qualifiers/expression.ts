import {CONDITIONAL_OPERATORS} from "../internal/internalConstants";
import {ExpressionQualifier} from "./expression/ExpressionQualifier";


/**
 * @description
 * Used for variable or conditional expressions
 * <b>Learn more:</b> {@link https://cloudinary.com/documentation/user_defined_variables#arithmetic_expressions | Arithmetic expressions }
 * @namespace Expression
 * @memberOf Qualifiers
 */


/**
 * @summary qualifier
 * @memberOf Qualifiers.Expression
 * @return {Qualifiers.Expression.ExpressionQualifier}
 */
function expression(exp: string): ExpressionQualifier {
  return new ExpressionQualifier(exp
    .toString()
    .split(" ")
    .map((val: keyof typeof CONDITIONAL_OPERATORS) => CONDITIONAL_OPERATORS[val] || val)
    .join("_"));
}

// as a namespace
const Expression = {
  expression
};

export {
  Expression,
  expression
};
