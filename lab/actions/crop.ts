import {Action} from "../../src/internal/Action";
import {ExpressionQualifier} from "../../src/qualifiers/expression/ExpressionQualifier";
import {CompassGravity} from "../../src/qualifiers/gravity/compassGravity/CompassGravity";

type ResizeCropQualifiers = {
  aspectRatio?: string,
  width?: number | ExpressionQualifier | string,
  height?: number | ExpressionQualifier,
  gravity?: CompassGravity
};

export function crop(cropQualifiers: ResizeCropQualifiers): Action;
export function crop(width:number, height:number): Action;
export function crop(cropQualifiers: any, height?: any): Action {
  return new Action();
}
