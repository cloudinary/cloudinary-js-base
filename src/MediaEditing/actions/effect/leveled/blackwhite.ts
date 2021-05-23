import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction";

/**
 * @description Converts the image to black and white.
 * @extends LeveledEffectAction
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class BlackwhiteEffectAction extends LeveledEffectAction {
  threshold(value: number | string): this {
    return this.setLevel(value);
  }
}


export {BlackwhiteEffectAction};
