import {LeveledEffectAction} from "../EffectActions/LeveledEffectAction";


/**
 * @description Fade out at the end of the video, use the length() method to set the time in ms for the fade to occur. (Server default: 2000)
 * @extends LeveledEffectAction
 * @memberOf Actions.Effect
 * @see Visit {@link Actions.Effect|Effect} for an example
 */
class FadeInEffectAction extends LeveledEffectAction {
  // We can't use EffectActionWithLength because this `length` is reversing the sign
  duration(value: number | string): this {
    return this.setLevel(value);
  }
}


export {FadeInEffectAction};
