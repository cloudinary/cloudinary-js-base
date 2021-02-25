import {Action} from "../../src/internal/Action";
import {ExpressionQualifier} from "../../src/qualifiers/expression/ExpressionQualifier";
import {CompassGravity} from "../../src/qualifiers/gravity/compassGravity/CompassGravity";

type ResizeFillQualifiers = {
  aspectRatio?: string,
  width?: number | ExpressionQualifier | string,
  height?: number | ExpressionQualifier,
  gravity: CompassGravity
};

export function fill(fillObject: ResizeFillQualifiers): Action;
export function fill(width: number, height: number): Action;
export function fill(fillObject: any, height?: any): Action {
  return new Action();
}
