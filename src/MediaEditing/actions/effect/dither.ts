import {LeveledEffectAction} from "./EffectActions/LeveledEffectAction";

/**
 * @description Applies an ordered dither filter to the image.
 * @extends LeveledEffectAction
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class DitherEffectAction extends LeveledEffectAction {
  /**
   *
   * @param {Qualifiers.Dither} ditherType - The dither type applied to the image
   * @return {this}
   */
  type(ditherType:number): this {
    return this.setLevel(ditherType);
  }
}


export {DitherEffectAction};
