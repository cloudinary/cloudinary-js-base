import {CustomRegion} from "./region/CustomRegion";
import {NamedRegion} from "./region/NamedRegion";

/**
 * @memberOf Qualifiers.Region
 * @return {Qualifiers.Region.CustomRegion}
 */
function custom(): CustomRegion {
  return new CustomRegion();
}

/**
 * @memberOf Qualifiers.Region
 * @return {Qualifiers.Region.NamedRegion}
 */
function faces(): NamedRegion {
  return new NamedRegion('faces');
}

/**
 * @memberOf Qualifiers.Region
 * @return {Qualifiers.Region.NamedRegion}
 */
function ocr(): NamedRegion {
  return new NamedRegion('ocr_text');
}

/**
 * @description Contains functions to select the type of region, used with Effect.blur() and Effect.pixelate().
 * <b>See also</b>: {@link Actions.Effect.BlurAction | Blur Action}
 * <b>See also</b>: {@link Actions.Effect.Pixelate | Blur Action}
 * <b>See also</b>: {@link Actions.Effect | Possible effects}
 * @namespace Region
 * @memberOf Qualifiers
 */
const Region = { ocr, faces, custom };
export {Region, ocr, faces, custom};