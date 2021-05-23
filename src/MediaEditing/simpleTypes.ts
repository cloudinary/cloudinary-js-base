import {ExpressionQualifier} from "./qualifiers/expression/ExpressionQualifier";

export type NumOrString = number | string;
export type NumOrExpression = number | ExpressionQualifier;
export type StringOrExpression = string | ExpressionQualifier;
export type StringNumberOrExpression = string | number | ExpressionQualifier;
